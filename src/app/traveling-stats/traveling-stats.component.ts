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

  currentCountryStats:ICountriesData =
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
  
  CountryToTravelToStats:ICountriesData =
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
  isActiveCountry1:boolean= false;
  
  isActiveCountry2:boolean= false;
  isSafeActive1:boolean = false;
  isSafeActive2:boolean = false;
  


  displayData(data){
    this.worldCountriesSummery = data["Countries"]; 

    
    console.log(data);
    console.log(this.worldCountriesSummery);

    this.worldData = data["Global"];
    console.log(this.worldData);



  }
  showCountryStats(identify,index){


    identify === 1 ? this.currentCountryStats = this.worldCountriesSummery[index] : this.CountryToTravelToStats = this.worldCountriesSummery[index]; 

    
    this.compareStats(this.currentCountryStats, this.CountryToTravelToStats);

  }

  compareStats(country1:ICountriesData , country2:ICountriesData){

    this.isActiveCountry1 = country1.TotalConfirmed > country2.TotalConfirmed ? true : false;
    this.isActiveCountry2 = country1.TotalConfirmed < country2.TotalConfirmed ? true : false;

    
    this.isSafeActive1 = country1.TotalDeaths < country2.TotalDeaths ? true : false;
    this.isSafeActive2 = country1.TotalDeaths > country2.TotalDeaths ? true : false;


    this.barChartData(country1 , country2);
    
    

  }

  lineGraph: any = [];




  barChartData(country1:ICountriesData, country2:ICountriesData){
    
  let currentCountry = {
    label: country1.Country,
    data: [country1.TotalDeaths],
    backgroundColor: country1.TotalDeaths < country2.TotalDeaths ? 'rgba(1, 137, 42)':'rgba(245, 9, 5)' ,
    borderWidth: 0,
    type: "bar"
  };

  let countryToTravelToo = {
    label: country2.Country,
    data: [country2.TotalDeaths],
    backgroundColor: country2.TotalDeaths < country1.TotalDeaths ? 'rgba(1, 137, 42)':'rgba(245, 9, 5)',
    borderWidth: 0,
    type: "bar"
  };

    let planetData = {
    labels: ["total Death"],
    datasets: [currentCountry, countryToTravelToo]

};

this.lineGraph = new Chart('chart', {
  type: 'bar',
  data: {
    labels: ["total Death country -"+country1.Country +" AND "+country2.Country ],
    datasets: [currentCountry ,countryToTravelToo ]
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

  ngOnInit(): void {
    this.statisticDataService.getWorldDataSummery().subscribe(data=>{
     
      this.displayData(data)
      
    })
      

    }
}
