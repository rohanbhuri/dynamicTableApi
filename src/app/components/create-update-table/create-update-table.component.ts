import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TableService } from '../../services/table.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-create-update-table',
  templateUrl: './create-update-table.component.html',
  styleUrls: ['./create-update-table.component.scss']
})
export class CreateUpdateTableComponent implements OnInit {

  tableName = new FormControl(undefined, [
    Validators.required,
  ]);
  tableDescription = new FormControl(undefined, [
    Validators.required,
  ]);

  Types = ['String', 'Number', 'Boolean', 'Double', 'Object', 'Object Id', 'Array',
    'Date', 'Timestamp', 'Binary Data', 'Null', 'Regular Expression', 'JavaScript', 'Symbol', 'Integer'];

  editing = false;

  fields = [];

  constructor(
    public tableService: TableService,
    public dialogRef: MatDialogRef<CreateUpdateTableComponent>,
    public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit() {
    if (this.data) {
      this.editing = true;
      this.tableName.setValue(this.data.tableName);
      this.tableName.disable();
      this.tableDescription.setValue(this.data.tableDescription);
      this.data._schema.forEach(element => {
        this.fields.push({
          fieldName: new FormControl(element.fieldName, [Validators.required]),
          type: new FormControl(element.type, [Validators.required]),
          length: new FormControl(element.length, [Validators.required]),
          null: new FormControl(element.null),
          fieldDescription: new FormControl(element.fieldDescription, [Validators.required])
        });
      });
    }
  }
  createTable() {
    if (this.checkValid()) {
      const _schema = [];
      this.fields.forEach(element => {
        _schema.push({
          fieldName: element.fieldName.value,
          type: element.type.value,
          length: element.length.value,
          null: element.null.value,
          fieldDescription: element.fieldDescription.value
        });
      });

      const data = {
        tableName: this.tableName.value,
        tableDescription: this.tableDescription.value,
        _schema: _schema
      };
      this.tableService.createTable(data).subscribe(res => {
        console.log(res);
        if (res.success) {
          this.snackBar.open(res.message, 'OK', {
            duration: 3000,
          });
          this.dialogRef.close();
        }
        if (res.error) {
          this.snackBar.open(res.message, 'OK', {
            duration: 3000,
          });
        }
      });
    } else {
      this.snackBar.open('Invalid Table Specifications', 'OK', {
        duration: 3000,
      });
    }
  }

  updateTable() {
    if (this.checkValidOnEdit()) {
      const _schema = [];
      this.fields.forEach(element => {
        _schema.push({
          fieldName: element.fieldName.value,
          type: element.type.value,
          length: element.length.value,
          null: element.null.value,
          fieldDescription: element.fieldDescription.value
        });
      });

      const data = {
        id: this.data._id,
        tableName: this.tableName.value,
        tableDescription: this.tableDescription.value,
        _schema: _schema
      };
      this.tableService.updateTable(data).subscribe(res => {
        console.log(res);
        if (res.success) {
          this.snackBar.open(res.message, 'OK', {
            duration: 3000,
          });
          this.dialogRef.close();
        }
        if (res.error) {
          this.snackBar.open(res.message, 'OK', {
            duration: 3000,
          });
        }
      });
    } else {
      this.snackBar.open('Invalid Table Specifications', 'OK', {
        duration: 3000,
      });
    }
  }

  addField() {
    this.fields.push({
      fieldName: new FormControl(undefined, [Validators.required]),
      type: new FormControl(undefined, [Validators.required]),
      length: new FormControl(undefined, [Validators.required]),
      null: new FormControl(undefined),
      fieldDescription: new FormControl(undefined, [Validators.required])
    });
  }
  removeField(i) {
    this.fields.splice(i, 1);
  }

  checkValid(): boolean {
    let valid = false;
    if (
      this.tableName.valid &&
      this.tableDescription.valid
    ) {
      this.fields.forEach(element => {
        console.log(element.fieldName.valid &&
          element.fieldDescription.valid &&
          element.type.valid &&
          element.length.valid &&
          element.null.valid);
        if (
          element.fieldName.valid &&
          element.fieldDescription.valid &&
          element.type.valid &&
          element.length.valid &&
          element.null.valid
        ) {
          valid = true;
        } else {
          valid = false;
        }
      });
    } else {
      valid = false;
    }
    return valid;
  }
  checkValidOnEdit(): boolean {
    let valid = false;
    if (
      this.tableDescription.valid
    ) {
      this.fields.forEach(element => {
        console.log(element.fieldName.valid &&
          element.fieldDescription.valid &&
          element.type.valid &&
          element.length.valid &&
          element.null.valid);
        if (
          element.fieldName.valid &&
          element.fieldDescription.valid &&
          element.type.valid &&
          element.length.valid &&
          element.null.valid
        ) {
          valid = true;
        } else {
          valid = false;
        }
      });
    } else {
      valid = false;
    }
    return valid;
  }
}