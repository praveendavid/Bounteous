import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.component';

@Component({
  selector: 'app-displaycontent',
  templateUrl: './displaycontent.component.html',
  styleUrls: ['./displaycontent.component.css']
})
export class DisplaycontentComponent implements OnInit {
  selectedData = '';
  constructor(private store: Store<AppState>) {

    this.store.select('message').pipe().subscribe((data: any) => {
      if (data) {
        this.selectedData = '';
        this.selectedData = JSON.stringify(data.selectedRouteData);
      }
    })
  }

  ngOnInit() {
  }

}
