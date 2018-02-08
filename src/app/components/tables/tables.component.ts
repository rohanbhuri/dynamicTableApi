import { Component, AfterViewInit, ViewChild, NgZone } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { TableService } from '../../services/table.service';
import { MatDialog } from '@angular/material';
import { CreateTableComponent } from '../create-table/create-table.component';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements AfterViewInit {

  displayedColumns = ['tableName', 'tableDescription', 'changedOn', 'changedBy', 'createdOn', 'createdBy'];
  dataSource: MatTableDataSource<any>;
  tables = [];
  total = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public tableService: TableService,
    public ngZone: NgZone,
    public dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource(this.tables);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getData();
    this.sort.sortChange.subscribe(sort => {
      this.getData();
    });
  }

  getData() {
    const params = {
      search: this.dataSource.filter,
      page: this.paginator.pageIndex,
      limit: this.paginator.pageSize,
      sort: { [this.sort.active]: this.sort.direction === 'desc' ? -1 : 1 }
    };

    this.tableService.allTablesSearch(params).subscribe(res => {
      console.log(res);
      this.tables = res.tables;
      this.total = res.total;
      this.ngZone.run(() => {
        this.dataSource = new MatTableDataSource(this.tables);
      });
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    this.getData();
  }

  onPageChange(event) {
    this.getData();
  }

  createTable() {
    const dialogRef = this.dialog.open(CreateTableComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.getData();
    });
  }
}
