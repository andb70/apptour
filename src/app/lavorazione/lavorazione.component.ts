import { Component } from '@angular/core';
import {StorageService} from '../storage.service';
import {ObjectID} from '../object-id.enum';

@Component({
  selector: 'app-lavorazione',
  templateUrl: './lavorazione.component.html',
  styleUrls: ['./lavorazione.component.css']
})
export class LavorazioneComponent {
  ObjectID = ObjectID;
  constructor(public service: StorageService) {
    /*this.service.viewChange.subscribe(res => {
      this.index = res.curIndex;
    });*/
  }

  onDivMouseOver(index) {
    this.service.onMouseOver({curIndex: index});
  }
}

