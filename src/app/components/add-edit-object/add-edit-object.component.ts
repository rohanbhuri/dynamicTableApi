import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-edit-object',
  templateUrl: './add-edit-object.component.html',
  styleUrls: ['./add-edit-object.component.scss']
})
export class AddEditObjectComponent implements OnInit {

  object = {};

  fields = [];

  fieldName;

  Types = [
    'Boolean',
    'Date',
    'Number',
    'String',
    'Time'
  ];

  constructor(public dialogRef: MatDialogRef<AddEditObjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data);
    if (this.data) {
      this.object = this.data;
      Object.getOwnPropertyNames(this.object).forEach(element => {
        this.fields.push({
          fieldName: element,
          type: undefined,
          value: this.object[element]
        });
      });
      console.log(this.fields);
    }
  }

  addField() {
    this.fields.push({
      fieldName: this.fieldName,
      type: undefined,
    });
    this.fieldName = undefined;
  }
  removeField(i) {
    this.fields.splice(i, 1);
  }

  onYesClick(): void {
    this.fields.forEach(element => {
      this.object[element.fieldName] = element.value;
    });
    this.dialogRef.close(this.object);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
