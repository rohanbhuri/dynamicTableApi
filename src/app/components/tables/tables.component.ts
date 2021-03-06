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
  tables = undefined;
  total = 0;
  document = document;
  search = undefined;

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
    this.tables = undefined;

    const timer = setTimeout(() => {
      if (this.tables === undefined) {
        this.snackBar.open('Server not responding, Please try again later!', 'OK', {
          duration: 3000,
        });
        this.tables = [];
      }
    }, 10000);
    const params = {
      search: this.dataSource.filter,
      page: this.paginator.pageIndex,
      limit: this.paginator.pageSize,
      sort: { [this.sort.active]: this.sort.direction === 'desc' ? -1 : 1 }
    };
    this.tableService.allTablesSearch(params).subscribe(res => {
      console.log(res);
      clearTimeout(timer);
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

  downloadTable() {
    const params = {
      search: this.search,
      sort: { [this.sort.active]: this.sort.direction === 'desc' ? -1 : 1 }
    };
    this.tableService.downloadTableList(params).subscribe(res => {
      console.log(res);
      const parsedResponse = res.result;
      const blob = new Blob([parsedResponse], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      if (navigator.msSaveOrOpenBlob) {
        navigator.msSaveBlob(blob, 'Tables.csv');
      } else {
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Tables.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
      window.URL.revokeObjectURL(url);
    });
  }

  // uploadTable(event) {
  //   const reader = new FileReader();
  //   reader.onload = (e: any) => {
  //     const base64Data = e.target.result.split('base64,');
  //     console.log(base64Data[1]);
  //     this.tableService.uploadTableList({ csv: atob(base64Data[1]) }).subscribe(res => {
  //       console.log(res);
  //       this.snackBar.open(res.message, 'OK', {
  //         duration: 3000,
  //       });
  //       this.getData();
  //     });
  //   };
  //   reader.readAsDataURL(event.target.files[0]);
  // }
}
