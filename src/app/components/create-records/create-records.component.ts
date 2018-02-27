import { Component, OnInit, Inject } from '@angular/core';
import { TableService } from '../../services/table.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-create-records',
  templateUrl: './create-records.component.html',
  styleUrls: ['./create-records.component.scss']
})
export class CreateRecordsComponent implements OnInit {
  id;
  data;
  document = document;

  records = undefined;
  total = 0;

  displayedColumns = [];

  fieldData = [];

  schema = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private tableService: TableService,
    public snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.setFields();
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
          this.schema = res.table._schema;
          this.addRecord();
        });
      }
    });
  }

  addRecord() {
    const obj = {};
    this.data._schema.forEach(element => {
      obj[element.fieldName] = undefined;
    });
    this.fieldData.push(obj);
    console.log(this.fieldData);
  }

  createRecords() {
    const data = {
      id: this.id,
      records: this.fieldData
    };
    this.tableService.createRecords(data).subscribe(res => {
      console.log(res);
    });
  }

}
