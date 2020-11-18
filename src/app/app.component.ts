import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Istatistics } from 'src/shared/istatistics';
import { StatsService } from 'src/shared/stats.service';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})


export class AppComponent implements OnInit,  AfterViewInit {

  constructor()
  {

  };

 ngOnInit() 
 {

 }
 
 
  ngAfterViewInit(): void
  {
    
  }

  


}
