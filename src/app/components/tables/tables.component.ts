import { Component, AfterViewInit, ViewChild, NgZone } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { TableService } from '../../services/table.service';
import { MatDialog } from '@angular/material';
import { CreateUpdateTableComponent } from '../create-update-table/create-update-table.component';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements AfterViewInit {

  displayedColumns = ['tableName', 'tableDescription', 'changedOn', 'changedBy', 'createdOn', 'createdBy', 'actions'];
  dataSource: MatTableDataSource<any>;
  tables = [];
  total = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public tableService: TableService,
    public ngZone: NgZone,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
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
      if (res.error) {
        this.snackBar.open(res.message, 'OK', {
          duration: 3000,
        });
      }
      if (res.success) {
        this.tables = res.tables;
        this.total = res.total;
        this.ngZone.run(() => {
          this.dataSource = new MatTableDataSource(this.tables);
        });
      }
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    if (filterValue === '') {
      this.dataSource.filter = undefined;
    } else {
      this.dataSource.filter = filterValue;
    }
    this.getData();
  }

  onPageChange(event) {
    this.getData();
  }

  deleteTable(table) {
    if (window.confirm('Are you sure you want to delete?')) {
      const data = {
        id: table._id
      };
      this.tableService.deleteTable(data).subscribe((res) => {
        this.snackBar.open(res.message, 'OK', {
          duration: 3000,
        });
        this.getData();
      });
    }
  }
}
