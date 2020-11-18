import { ChartsModule } from 'ng2-charts';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from './material/material.module'; 
import { StatsService} from "../shared/stats.service";
import {HttpClientModule} from '@angular/common/http';
import { SlideTextComponent } from './slide-text/slide-text.component';
import { MainComponent } from './main/main.component';
import {FormsModule } from '@angular/forms';
import { TravelingStatsComponent } from './traveling-stats/traveling-stats.component';
import { ViewDataComponent } from './view-data/view-data.component';
import { StatisticsComponent } from './statistics/statistics.component'
@NgModule({
  declarations: [
    AppComponent,
    SlideTextComponent,
    MainComponent,
    TravelingStatsComponent,
    ViewDataComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule, 
    HttpClientModule, 
    AppRoutingModule,
    FormsModule, 
    ChartsModule, 
     
  ],
  providers: [StatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
