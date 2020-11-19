import { ISAStats } from './../app/isastats';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import {Observable} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  SAstatsUrl:string = "api/SACovidStats.json"; 

   //https://documenter.getpostman.com/view/10808728/SzS8rjbc#81415d42-eb53-4a85-8484-42d2349debfe

   worldData: string = "api/summary.json";



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
