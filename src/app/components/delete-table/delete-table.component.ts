import { Component, OnInit, Inject } from '@angular/core';
import { TableService } from '../../services/table.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';



@Component({
  selector: 'app-delete-table',
  templateUrl: './delete-table.component.html',
  styleUrls: ['./delete-table.component.scss']
})
export class DeleteTableComponent implements OnInit {

  id;
  data;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private tableService: TableService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog

  ) {
    this.setValues();
  }

  ngOnInit() {

  }

  setValues() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = params['id'];
        const data = {
          id: this.id
        };
        this.tableService.getTable(data).subscribe(res => {
          console.log(res);
          this.data = res.table;
        });
      }
    });
  }

  deleteTableDilog() {
    const dialogRef = this.dialog.open(DeleteTableDilog, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.deleteTable();
    });
  }

  deleteTable() {
    const data = {
      id: this.data._id
    };
    this.data = undefined;
    this.tableService.deleteTable(data).subscribe((res) => {
      if (res.success) {
        this.snackBar.open(res.message, 'OK', {
          duration: 3000,
        });
        this.location.back();
      } else {
        this.snackBar.open(res.message, 'OK', {
          duration: 3000,
        });
        this.setValues();
      }
    });
  }
}


@Component({
  selector: 'app-delete-table',
  template: `
  <mat-card>
  <h4>are you sure you want to delete?</h4>
  
  </mat-card
    `
})
export class DeleteTableDilog {

  constructor(
    public dialogRef: MatDialogRef<DeleteTableDilog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
