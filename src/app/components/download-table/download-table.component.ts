import { Component, OnInit, Inject } from '@angular/core';
import { TableService } from '../../services/table.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-download-table',
  templateUrl: './download-table.component.html',
  styleUrls: ['./download-table.component.scss']
})
export class DownloadTableComponent implements OnInit {

  id;
  data;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private tableService: TableService
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
}
