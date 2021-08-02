import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BounteousService } from './bounteous.service';
import * as BounteousAction from './bounteous.action';
export interface AppState {
  routes:{},
  selectedRouteData:{}
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bounteous';
  constructor(private store: Store<AppState>, private _service: BounteousService) {
    this.store.dispatch(new BounteousAction.LoadRoutes);
  }
}
