import { Component, AfterViewInit, Inject, NgZone, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { TableService } from '../../services/table.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-display-records',
  templateUrl: './display-records.component.html',
  styleUrls: ['./display-records.component.scss']
})
export class DisplayRecordsComponent implements AfterViewInit {

  id;
  data = {
    _schema: []
  };
  document = document;

  records = undefined;
  total = 0;
  search;

  displayedColumns = [];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(
    public ngZone: NgZone,
    private route: ActivatedRoute,
    private location: Location,
    private tableService: TableService,
    public snackBar: MatSnackBar,
  ) {
    this.dataSource = new MatTableDataSource(this.records);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.setFields();
    }, 0);
  }

  setFields() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = params['id'];
        const data = {
          id: this.id
        };
        this.tableService.getTable(data).subscribe(res => {
          console.log(res);
          this.data = res.table;
          res.table._schema.forEach(element => {
            this.displayedColumns.push(element.fieldName);
          });
          this.getData();
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.sort.sortChange.subscribe(sort => {
            this.getData();
          });
        });
      }
    });
  }

  getData() {
    console.log(this.paginator);
    this.records = undefined;
    const params = {
      id: this.id,
      search: this.search,
      page: this.paginator.pageIndex,
      limit: this.paginator.pageSize,
      sort: { [this.sort.active]: this.sort.direction === 'desc' ? -1 : 1 }
    };
    this.tableService.allRecordSearch(params).subscribe(res => {
      console.log(res);
      if (res.error) {
        this.snackBar.open(res.message, 'OK', {
          duration: 3000,
        });
      }
      if (res.success) {
        this.records = res.records;
        this.total = res.total;
        this.ngZone.run(() => {
          this.dataSource = new MatTableDataSource(this.records);
        });
      }
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    if (filterValue === '') {
      this.dataSource.filter = undefined;
      this.search = undefined;
    } else {
      this.dataSource.filter = filterValue;
      this.search = filterValue;
    }
    this.getData();
  }

  onPageChange(event) {
    this.getData();
  }

}
