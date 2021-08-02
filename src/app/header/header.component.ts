import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as BounteousAction from '../bounteous.action';
interface AppState {
  message: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  routes = [];
  constructor(private store: Store<AppState>) {
    this.store.select('message').pipe().subscribe((data: any) => {
      if (data) {
        this.routes=[];
        const dataObj = data.routes;
        const keys = Object.keys(dataObj);
        keys.forEach(f => {
          this.routes.push({ key: f, value: dataObj[f] });
        });
      }
    });
  }

  ngOnInit() {
  }

  displayContent(key) {
    this.store.dispatch(new BounteousAction.LoadSelectedRoute(key));
  }

}
