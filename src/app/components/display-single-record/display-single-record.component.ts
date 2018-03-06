import { Component, OnInit, Inject, NgZone, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { TableService } from '../../services/table.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-display-single-record',
  templateUrl: './display-single-record.component.html',
  styleUrls: ['./display-single-record.component.scss']
})
export class DisplaySingleRecordComponent implements OnInit {

  tableId;
  recordId;
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
          tableId: this.tableId,
          recordId: this.recordId
        };
        this.tableService.getRecord(data).subscribe(res => {
          if (res.success) {
            this.record = res.record;
          }
        });
      }
    });
  }

}
