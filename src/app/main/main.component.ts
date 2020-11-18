import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Istatistics } from 'src/shared/istatistics';
import { StatsService } from 'src/shared/stats.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { TextAst } from '@angular/compiler';
import { ISAStats } from '../isastats';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ViewDataComponent } from '../view-data/view-data.component';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [

    trigger('land', [
      transition('* => *', [

        query('.text', style({ opacity: 0 })),

        query('.text', stagger('300ms', [
          animate('.80s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
          ]))]), { optional: true })
        ,

      ])
    ]),

    trigger('loadData', [

      transition('* => *', [

        query('.card ', style({ opacity: 0, transform: 'translateX(-40px)' })),
        query('.card ', stagger('200ms', [
          animate('800ms 1.2s ease-out'), style({ opacity: 1, transform: 'translateX(0)' })

        ]))

      ])

    ])
  ]

})
export class MainComponent implements OnInit, AfterViewInit {

  title = 'CovidApp';

  statsData: ISAStats[];

  worldStates: any[];
  apiError: any;
  isLoaded: boolean =false;

  panelOpenState

  covidTabInfoLabels = ["What is COVID19", "FAQ", "Sypmtoms"];

  covidTabContentInfo:any[] = ["is a virus"];


  
  constructor(private stats: StatsService, private dialog:MatDialog) {

  }
  ngOnInit() {

    this.stats.getCountrySatats().subscribe(data=> {
      this.statsData = data;
      this.updateDataStat(data);
    })

    this.stats.getTabInfoData().subscribe(data => {
      this.covidTabContentInfo = data;
      this.update(data);
  
    })
  }


  update(data){
    this.covidTabContentInfo = data;
  }
  updateDataStat(dataStats){

    this.statsData = dataStats;
    console.log( this.statsData);
    this.ngAfterViewInit();
  }

  showData() {

    console.log(this.covidTabContentInfo,"info");


  }

   ngAfterViewInit() {


    this.showData();


  }

  
 openCharData(prodID:Number ):void {

  this.dialog.open( ViewDataComponent,{
    
    width:'1000px',
    data:this.statsData
   });

 
  }
 
}
