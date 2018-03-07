import { Component, OnInit, Inject, NgZone, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { TableService } from '../../services/table.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-update-single-record',
  templateUrl: './update-single-record.component.html',
  styleUrls: ['./update-single-record.component.scss']
})
export class UpdateSingleRecordComponent implements OnInit {

  tableId;
  recordId;
  data;
  record;

  constructor(
    public ngZone: NgZone,
    private route: ActivatedRoute,
    public location: Location,
    private tableService: TableService,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.tableId = params['id'];
        this.recordId = params['record'];
        const data = {
          id: this.tableId,
          recordId: this.recordId
        };
        this.tableService.getTable(data).subscribe(res => {
          if (res.success) {
            this.data = res.table;
          }
        });
        this.tableService.getRecord(data).subscribe(res => {
          if (res.success) {
            this.record = res.record;
          }
        });
      }
    });
  }

  updateRecord() {
    console.log(this.record);
    const data = {
      id: this.tableId,
      record: this.record
    };

    this.tableService.updateRecord(data).subscribe(res => {
      console.log(res);
      if (res.success) {
        this.snackBar.open(res.message, 'OK', {
          duration: 3000,
        });
        this.location.back();
      }
      if (res.error) {
        this.snackBar.open(res.message, 'OK', {
          duration: 3000,
        });
      }
    });
  }

}
