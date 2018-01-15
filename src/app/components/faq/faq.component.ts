import { Component, OnInit } from '@angular/core';
import { RouterTransition } from '../../router.animations';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  animations: [RouterTransition()],
  host: { '[@routerTransition]': '' }
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
