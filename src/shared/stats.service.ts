import { ISAStats } from './../app/isastats';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import {Observable} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  SAstatsUrl:string = "api/SACovidStats.json"; 

  // worldData: string = "https://covid.ourworldindata.org/data/owid-covid-data.json";
   worldData: string = "api/summary.json";

 // worldData = "https://opendata.ecdc.europa.eu/covid19/casedistribution/json;"


  covid19iData = "api/FAQData.json";

  constructor(private http:HttpClient) 
  {


  }

  getCountrySatats():Observable <ISAStats[]>{
    return this.http.get<ISAStats[]>(this.SAstatsUrl);
  }

  getWorldDataSummery():Observable<any[]>{
    let data = this.http.get<any[]>(this.worldData);
    return data;

  }

  getTabInfoData():Observable<any[]>{

    return this.http.get<any[]>(this.covid19iData);
  }

  
  
}
