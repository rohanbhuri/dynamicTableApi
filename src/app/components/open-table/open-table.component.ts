import { Component, OnInit, Inject } from '@angular/core';
import { TableService } from '../../services/table.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-open-table',
  templateUrl: './open-table.component.html',
  styleUrls: ['./open-table.component.scss']
})
export class OpenTableComponent implements OnInit {

  id;
  data;
  document = document;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private tableService: TableService,
    public snackBar: MatSnackBar
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

  applyFilter(filterValue: string) {
    this.data._schema = [];
    let array = [];
    filterValue = filterValue.trim(); // Remove whitespace
    if (filterValue === '') {
      this.setValues();
    } else {
      const data = {
        id: this.id
      };
      this.tableService.getTable(data).subscribe(res => {
        array = res.table._schema;
        array.forEach((element, key) => {
          console.log(element.fieldName === filterValue);
          if (new RegExp('^' + filterValue, 'i').test(element.fieldName)) {
            this.data._schema.push(element);
          } else {
            this.data._schema.splice(key, 1);
          }
        });
      });
    }
  }

  downloadTable() {
    const params = {
      id: this.id
    };
    this.tableService.downloadTableSchema(params).subscribe(res => {
      console.log(res);
      const parsedResponse = res.result;
      const blob = new Blob([parsedResponse], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      if (navigator.msSaveOrOpenBlob) {
        navigator.msSaveBlob(blob, 'Table.csv');
      } else {
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Table.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
      window.URL.revokeObjectURL(url);
    });
  }

  uploadTable(event) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const base64Data = e.target.result.split('base64,');
      console.log(base64Data[1]);
      this.tableService.uploadTableSchema({ id: this.id, csv: atob(base64Data[1]) }).subscribe(res => {
        if (res.success) {
          this.snackBar.open(res.message, 'OK', {
            duration: 3000,
          });
          this.setValues();
        }
        if (res.error) {
          this.snackBar.open(res.message, 'OK', {
            duration: 3000,
          });
        }
      });
    };
    reader.readAsDataURL(event.target.files[0]);
  }
}

