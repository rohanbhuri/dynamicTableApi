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

  loading = false;
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
        this.loading = true;
        this.tableService.getTable(data).subscribe(res => {
          console.log(res);
          this.data = res.table;
          this.schema = res.table._schema;
          this.loading = false;
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

  removeRecord(i) {
    this.fieldData.splice(i, 1);
  }

  createRecords() {
    const data = {
      id: this.id,
      records: this.fieldData
    };
    this.loading = true;
    this.tableService.createRecords(data).subscribe(res => {
      console.log(res);
      if (res.success) {
        this.snackBar.open(res.message, 'OK', {
          duration: 3000,
        });
        this.loading = false;
        this.location.back();
      }
      if (res.error) {
        this.loading = false;
        this.snackBar.open(res.message, 'OK', {
          duration: 3000,
        });
      }
    });
  }

  uploadRecords(event) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const base64Data = e.target.result.split('base64,');
      // console.log(base64Data[1]);
      const csv = atob(base64Data[1]);
      // console.log(atob(base64Data[1]));
      console.log(this.csvJSON(csv));
      const csvData = JSON.parse(this.csvJSON(csv));
      console.log(csvData);

      csvData.forEach(element => {
        const obj = {};
        this.data._schema.forEach(element2 => {
          console.log('\"' + element2.fieldName + '\"');
          obj[element2.fieldName] = element['\"' + element2.fieldName + '\"'].replace(/"/g, '');
          console.log(obj, 'objjjjjj');
        });
        this.fieldData.push(obj);
      });

    };
    reader.readAsDataURL(event.target.files[0]);
  }

  csvJSON(csv) {

    const lines = csv.split('\n');

    const result = [];

    const headers = lines[0].split(',');

    for (let i = 1; i < lines.length; i++) {

      const obj = {};
      const currentline = lines[i].split(',');

      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }
      result.push(obj);

    }

    // return result; //JavaScript object
    return JSON.stringify(result); // JSON
  }


}
