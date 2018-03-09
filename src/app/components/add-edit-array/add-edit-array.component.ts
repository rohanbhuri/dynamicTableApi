import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-edit-array',
  templateUrl: './add-edit-array.component.html',
  styleUrls: ['./add-edit-array.component.scss']
})
export class AddEditArrayComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddEditArrayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
