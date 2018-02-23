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
  tableDescription = new FormControl(undefined, [
    Validators.required,
  ]);

  Types = ['String', 'Number', 'Boolean', 'Double', 'Object', 'Object Id', 'Array',
    'Date', 'Timestamp', 'Binary Data', 'Null', 'Regular Expression', 'JavaScript', 'Symbol', 'Integer'];

  editing = false;

  fields = [];

  id;
  data;

  loading = false;

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
              fieldName: new FormControl(element.fieldName, [Validators.required, Validators.pattern('^[a-z._-]+$')]),
              type: new FormControl(element.type, [Validators.required]),
              unique: new FormControl(element.unique),
              null: new FormControl(element.null),
              fieldDescription: new FormControl(element.fieldDescription, [Validators.required])
            });
          });
          this.loading = false;
        });
      }
    });
  }

  createTable() {
    if (this.checkValid() || this.checkDuplicatefield()) {
      this.loading = true;
      const _schema = [];
      this.fields.forEach(element => {
        _schema.push({
          fieldName: element.fieldName.value,
          type: element.type.value,
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
    } else {
      this.snackBar.open('Invalid Table Specifications', 'OK', {
        duration: 3000,
      });
    }
  }

  updateTable() {
    if (this.checkValidOnEdit() || this.checkDuplicatefield()) {
      this.loading = true;
      const _schema = [];
      this.fields.forEach(element => {
        _schema.push({
          fieldName: element.fieldName.value,
          type: element.type.value,
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
    } else {
      this.snackBar.open('Invalid Table Specifications', 'OK', {
        duration: 3000,
      });
    }
  }

  addField() {
    this.fields.push({
      fieldName: new FormControl(undefined, [Validators.required, Validators.pattern('^[a-z._-]+$')]),
      type: new FormControl(undefined, [Validators.required]),
      unique: new FormControl(undefined),
      null: new FormControl(undefined),
      fieldDescription: new FormControl(undefined, [Validators.required])
    });
  }

  removeField(i) {
    this.fields.splice(i, 1);
  }

  checkDuplicatefield(): boolean {
    let duplicacy = true;
    this.fields.forEach((element1, key1) => {
      this.fields.forEach((element2, key2) => {
        if (element1.fieldName.value === element2.fieldName.value) {
          if (key1 !== key2) {
            duplicacy = false;
            return duplicacy;
          }
        }
      });
    });
    return duplicacy;
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
          element.null.valid &&
          element.unique.valid
        );
        if (
          element.fieldName.valid &&
          element.fieldDescription.valid &&
          element.type.valid &&
          element.null.valid &&
          element.unique.valid
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
          element.unique.valid &&
          element.null.valid);
        if (
          element.fieldName.valid &&
          element.fieldDescription.valid &&
          element.type.valid &&
          element.unique.valid &&
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
