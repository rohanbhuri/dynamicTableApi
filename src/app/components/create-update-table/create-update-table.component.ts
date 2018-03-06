import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TableService } from '../../services/table.service';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-create-update-table',
  templateUrl: './create-update-table.component.html',
  styleUrls: ['./create-update-table.component.scss']
})
export class CreateUpdateTableComponent implements OnInit {

  tableName = new FormControl(undefined, [
    Validators.required,
  ]);
  tableDescription = new FormControl(undefined);

  // Types = ['Array', 'Binary Data', 'Boolean', 'Date', 'Double', 'Integer', 'JavaScript', 'Null', 'Number', 'Object', 'Object Id',
  //   'Regular Expression', 'String', 'Symbol', 'Timestamp'];

  Types = ['Boolean', 'Date', 'Integer', 'Null', 'Number', 'String', 'Timestamp'];


  editing = false;

  fields = [];

  id;
  data;

  loading = false;

  document = document;

  constructor(
    public tableService: TableService,
    public snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.setEditValues();
  }

  ngOnInit() {

  }

  setEditValues() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.loading = true;
        this.editing = true;
        this.id = params['id'];
        const data = {
          id: this.id
        };
        this.tableService.getTable(data).subscribe(res => {
          console.log(res);
          this.data = res.table;
          this.tableName.setValue(this.data.tableName);
          this.tableName.disable();
          this.tableDescription.setValue(this.data.tableDescription);
          this.data._schema.forEach(element => {
            this.fields.push({
              fieldName: new FormControl(element.fieldName, [Validators.required]),
              type: new FormControl(element.type, [Validators.required]),
              length: new FormControl(element.length),
              unique: new FormControl(element.unique),
              null: new FormControl(element.null),
              fieldDescription: new FormControl(element.fieldDescription)
            });
          });
          this.loading = false;
        });
      }
    });
  }

  checkTypeAssignLength(element): String {
    if (
      element.type.value === 'Double' ||
      element.type.value === 'Integer' ||
      element.type.value === 'Number' ||
      element.type.value === 'String'
    ) {
      return element.length.value;
    } else {
      return undefined;
    }
  }

  createTable() {
    this.loading = true;
    const _schema = [];
    this.fields.forEach(element => {
      _schema.push({
        fieldName: element.fieldName.value,
        type: element.type.value,
        length: this.checkTypeAssignLength(element),
        unique: element.unique.value,
        null: element.null.value,
        fieldDescription: element.fieldDescription.value
      });
    });

    const data = {
      tableName: this.tableName.value,
      tableDescription: this.tableDescription.value,
      createdBy: JSON.parse(localStorage.getItem('currentUser'))._id,
      _schema: _schema
    };
    this.tableService.createTable(data).subscribe(res => {
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

  updateTable() {
    this.loading = true;
    const _schema = [];
    this.fields.forEach(element => {
      _schema.push({
        fieldName: element.fieldName.value,
        type: element.type.value,
        length: this.checkTypeAssignLength(element),
        unique: element.unique.value,
        null: element.null.value,
        fieldDescription: element.fieldDescription.value
      });
    });

    const data = {
      id: this.data._id,
      tableName: this.tableName.value,
      tableDescription: this.tableDescription.value,
      changedOn: Date.now(),
      changedBy: JSON.parse(localStorage.getItem('currentUser'))._id,
      _schema: _schema
    };
    this.tableService.updateTable(data).subscribe(res => {
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

  addField() {
    this.fields.push({
      fieldName: new FormControl(undefined, [Validators.required]),
      type: new FormControl(undefined, [Validators.required]),
      length: new FormControl(undefined),
      unique: new FormControl(undefined),
      null: new FormControl(undefined),
      fieldDescription: new FormControl(undefined)
    });
  }

  removeField(i) {
    this.fields.splice(i, 1);
  }

  uploadFields(event) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const base64Data = e.target.result.split('base64,');
      // console.log(base64Data[1]);
      const csv = atob(base64Data[1]);
      // console.log(atob(base64Data[1]));
      console.log(this.csvJSON(csv));
      const csvData = JSON.parse(this.csvJSON(csv));

      csvData.forEach(element => {
        console.log(element['\"unique\"'].replace(/"/g, ''));
        this.fields.push({
          fieldName: new FormControl(element['\"fieldName\"'].replace(/"/g, ''), [Validators.required]),
          type: new FormControl(element['\"type\"'].replace(/"/g, ''), [Validators.required]),
          length: new FormControl(element['\"length\"'].replace(/"/g, '')),
          unique: new FormControl(element['\"unique\"'].replace(/"/g, '') === 'true' ? true : false),
          null: new FormControl(element['\"null\"'].replace(/"/g, '') === 'true' ? true : false),
          fieldDescription: new FormControl(element['\"fieldDescription\"'].replace(/"/g, ''))
        });
        // console.log(this.fields);
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
