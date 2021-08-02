import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BounteousReducer } from './bounteous.reducer';
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from './header/header.component';
import { DisplaycontentComponent } from './displaycontent/displaycontent.component';
import { EffectsModule } from "@ngrx/effects";
import { BounteousEffects } from './bounteous.effect';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplaycontentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ message: BounteousReducer }),
    EffectsModule.forRoot([BounteousEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
