import { Component, OnInit } from '@angular/core';
import {StorageService} from '../storage.service';

@Component({
  selector: 'app-digital',
  templateUrl: './digital.component.html',
  styleUrls: ['./digital.component.css']
})
export class DigitalComponent implements OnInit {

  btnOttimizza3 = false;
  btnOttimizza4 = false;

  btn3 = 'active';

  constructor(public service: StorageService) {

  }

  ngOnInit() {
  }

  onOttimizza3() {
    this.btnOttimizza3 = !this.btnOttimizza3;
    this.service.onOttimizza3({stato: this.btnOttimizza3});


    // Da migliorare per mettere se attivo o no...
    if (this.btn3 = 'active') {
      this.btn3 = 'none';
    } else {
      this.btn3 = 'active';
    }
  }

  onOttimizza4() {
    this.btnOttimizza4 = !this.btnOttimizza4;
    this.service.onOttimizza4({stato: this.btnOttimizza4});
  }
}
