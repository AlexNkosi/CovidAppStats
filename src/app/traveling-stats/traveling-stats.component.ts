import { IGlobalData } from './../iglobal-data';
import { ISAStats } from './../isastats';
import { Istatistics } from './../../shared/istatistics';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { StatsService } from 'src/shared/stats.service';
import { ICountriesData } from '../icountries-data';

@Component({
  selector: 'app-traveling-stats',
  templateUrl: './traveling-stats.component.html',
  styleUrls: ['./traveling-stats.component.css']
})
export class TravelingStatsComponent implements OnInit {

  constructor(private statisticDataService:StatsService) { }

  DeathData:ISAStats[]; 

  worldCountriesSummery:ICountriesData[];

  singleCountryStats:ICountriesData =
    {
      "Country": "Afghanistan",
      "CountryCode": "AF",
      "Slug": "afghanistan",
      "NewConfirmed": 225,
      "TotalConfirmed": 43628,
      "NewDeaths": 12,
      "TotalDeaths": 1638,
      "NewRecovered": 23,
      "TotalRecovered": 35160,
      "Date": new Date("2020-11-18T07:01:52Z"),
      "Premium": {}
  
  };

  worldData:IGlobalData;

  
  initializeSingleCountry(){
    
    
    this.singleCountryStats.TotalConfirmed = this.worldData.TotalConfirmed;
      
    this.singleCountryStats.TotalDeaths = this.worldData.TotalDeaths;
    
    this.singleCountryStats.TotalRecovered = this.worldData.TotalRecovered;
    
  }


  displayData(data){
    this.worldCountriesSummery = data["Countries"]; 

    
    console.log(data);
    console.log(this.worldCountriesSummery);

    this.worldData = data["Global"];
    console.log(this.worldData);



  }
  showCountryStats(index){

    console.log(index);
    console.log(this.worldCountriesSummery[index]);
    this.singleCountryStats = this.worldCountriesSummery[index];

  }
  lineGraph: any = [];

  ngOnInit(): void {
    this.statisticDataService.getWorldDataSummery().subscribe(data=>{
     
      this.displayData(data)
      
    })
      

      this.lineGraph = new Chart('chart', {
        type: 'line',
        data: {
          labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
          datasets: [{
            label: 'Total Deaths Each Month',
            data: [2_977, 45_249, 239_022, 386_162, 526_178, 693_725, 870_499, 1_025_848, 1_202_175, 1_314_801],
            fill: true,
            lineTension: 0.5,
            borderColor: '#4680ff',
            borderWidth: 2
          }]
        },
        options: {
          title: {
            text: '',
            display: true
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    }
}
