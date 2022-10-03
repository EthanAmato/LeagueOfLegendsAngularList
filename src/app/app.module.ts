import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChampionsComponent } from './champions/champions.component';
import { ChampionDetailComponent } from './champion-detail/champion-detail.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { InfoComponent } from './info/info.component';
import { WorldsinfoComponent } from './worldsinfo/worldsinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    ChampionsComponent,
    ChampionDetailComponent,
    InfoComponent,
    WorldsinfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
