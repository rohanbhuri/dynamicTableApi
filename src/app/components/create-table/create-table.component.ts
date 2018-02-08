import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TableService } from '../../services/table.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-create-table',
  templateUrl: './create-table.component.html',
  styleUrls: ['./create-table.component.scss']
})
export class CreateTableComponent implements OnInit {

  tableName = new FormControl('', [
    Validators.required,
  ]);
  tableDescription = new FormControl('', [
    Validators.required,
  ]);
  createdBy = new FormControl('', [
    Validators.required,
  ]);
  changedBy = new FormControl('', [
    Validators.required,
  ]);

  constructor(
    public tableService: TableService,
    public dialogRef: MatDialogRef<CreateTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }
  createTable() {
    if (this.checkValid()) {
      const data = {
        tableName: this.tableName.value,
        tableDescription: this.tableDescription.value,
        createdBy: this.createdBy.value,
        changedBy: this.changedBy.value

      };
      this.tableService.createTable(data).subscribe(res => {
        console.log(res);
        this.dialogRef.close();
      });
    } else {
    }
  }

  checkValid(): boolean {
    if (
      this.tableName.valid &&
      this.tableDescription.valid &&
      this.changedBy.valid &&
      this.createdBy.valid
    ) {
      return true;
    } else {
      return false;
    }
  }
}
