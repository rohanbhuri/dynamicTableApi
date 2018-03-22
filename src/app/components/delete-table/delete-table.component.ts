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
    public location: Location,
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
    const dialogRef = this.dialog.open(DeleteTableDilogComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteTable();
      }
    });
  }

  deleteTable() {
    const data = {
      id: this.data._id
    };
    this.data = undefined;
    const timer = setTimeout(() => {
      this.location.back();
      if (this.data === undefined) {
        this.snackBar.open('Server not responding, Please try again later!', 'OK', {
          duration: 3000,
        });
      }
    }, 10000);
    this.tableService.deleteTable(data).subscribe((res) => {
      clearTimeout(timer);
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
  <p>Are you sure you want to delete?</p>
  <div class="full-width text-right">
  <button mat-button (click)="onNoClick();">No</button>
  <button mat-button (click)="onYesClick();">Yes</button>
  </div>
    `
})
export class DeleteTableDilogComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteTableDilogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
