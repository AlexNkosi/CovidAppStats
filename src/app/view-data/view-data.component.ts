import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import * as Chart from 'chart.js';


@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent implements OnInit {
  statisticDataService: any;

  constructor( public dialogRef: MatDialogRef<ViewDataComponent>,
    @Inject(MAT_DIALOG_DATA) public objData) { }


    data :any[];
    lineGraph: any = [];

    ngOnInit(): void {
      
    
      this.data = this.objData;
  
      console.log(this.data);
      this.code();
        // this.lineGraph = new Chart('chart', {
        //   type: 'line',
        //   data: {
        //     labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
        //     datasets: [{
        //       label: 'Total Deaths Each Month',
        //       data: [2_977, 45_249, 239_022, 386_162, 526_178, 693_725, 870_499, 1_025_848, 1_202_175, 1_314_801],
        //       fill: true,
        //       lineTension: 0.5,
        //       borderColor: '#4680ff',
        //       borderWidth: 2
        //     }]
        //   },
        //   options: {
        //     title: {
        //       text: '',
        //       display: true
        //     },
        //     scales: {
        //       yAxes: [{
        //         ticks: {
        //           beginAtZero: true
        //         }
        //       }]
        //     }
        //   }
        // });
      
      }


code()
{

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
  let reports = [];
    let labels = [];
    let dates = [];

    this.data.map((item, index) => {
        const value = item.Confirmed - this.data[index > 0 ? (index - 1) : 0].Confirmed;
        reports.push(value < 0 ? this.data[index - 1] : value);
        labels.push(`Day ${index + 1}`);
        const d = new Date(item.Date);
        const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
        const month = d.getMonth();
        const dateUSFormat = `${months[month]} ${day}`;
        dates.push(dateUSFormat);
    })

    console.log(reports,labels,dates);


    this.lineGraph = new Chart('chart',{
      type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: '',
                    backgroundColor: '#AEBEFF',
                    borderColor: '#AEBEFF',
                    borderWidth: 5,
                    data: reports,
                    fill: false,
                    pointBackgroundColor: '#fff',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 5
                }]
            },
            options: {
                responsive: true,
                legend: {
                    display: false
                },
                title: {
                    display: false
                },
                tooltips: {
                    displayColors: false,
                    backgroundColor: '#fff',
                    titleFontColor: '#354150',
                    bodyFontColor: '#354150',
                    bodyFontSize: 14,
                    xPadding: 10,
                    yPadding: 10,
                    callbacks: {
                        title: function (tooltipItems) {
                            return "Day - " + (Number(tooltipItems[0].index) + 1) + ", " + dates[Number(tooltipItems[0].index)];
                        },
                        label: function (tooltipItem) {
                            return "Infected: " + Number(tooltipItem.yLabel) + "+";
                        }
                    }
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                layout: {
                    padding: {
                        left: 15,
                        right: 15,
                        top: 30,
                        bottom: 15
                    }
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        }
                    }]
                }
            }
    });

/*
      const chartReport = async (selectorId) => {
        const selectMenu = selectorId.querySelector("select");
        const countries = await getData(BASE_URL + 'v2/countries/');
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
        // Make Select option Dropdown Menu
        countries.map((country) => {
            let optionDom = document.createElement('option');
            optionDom.value = country.countryInfo.iso2;
            optionDom.classList.add(country.countryInfo.iso2);
            optionDom.text = country.country;
            selectMenu.append(optionDom);
        });
    
    
      
    //  chartData(data) {
    //   let reports = [];
    //   let labels = [];
    //   let dates = [];

    //   data.map((item, index) => {
    //       const value = item.Confirmed - data[index > 0 ? (index - 1) : 0].Confirmed;
    //       reports.push(value < 0 ? data[index - 1] : value);
    //       labels.push(`Day ${index + 1}`);
    //       const d = new Date(item.Date);
    //       const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
    //       const month = d.getMonth();
    //       const dateUSFormat = `${months[month]} ${day}`;
    //       dates.push(dateUSFormat);
    //   })

    //   const config = {
    //       type: 'line',
    //       data: {
    //           labels: labels,
    //           datasets: [{
    //               label: '',
    //               backgroundColor: '#AEBEFF',
    //               borderColor: '#AEBEFF',
    //               borderWidth: '5',
    //               data: reports,
    //               fill: false,
    //               pointBackgroundColor: '#fff',
    //               pointBorderColor: '#fff',
    //               pointBorderWidth: 5
    //           }]
    //       },
    //       options: {
    //           height: 450,
    //           responsive: true,
    //           legend: {
    //               display: false
    //           },
    //           title: {
    //               display: false
    //           },
    //           tooltips: {
    //               displayColors: false,
    //               backgroundColor: '#fff',
    //               titleFontColor: '#354150',
    //               bodyFontColor: '#354150',
    //               bodyFontSize: 14,
    //               xPadding: 10,
    //               yPadding: 10,
    //               callbacks: {
    //                   title: function (tooltipItems) {
    //                       return "Day - " + (Number(tooltipItems[0].index) + 1) + ", " + dates[Number(tooltipItems[0].index)];
    //                   },
    //                   label: function (tooltipItem) {
    //                       return "Infected: " + Number(tooltipItem.yLabel) + "+";
    //                   }
    //               }
    //           },
    //           hover: {
    //               mode: 'nearest',
    //               intersect: true
    //           },
    //           layout: {
    //               padding: {
    //                   left: 15,
    //                   right: 15,
    //                   top: 30,
    //                   bottom: 15
    //               }
    //           },
    //           scales: {
    //               xAxes: [{
    //                   gridLines: {
    //                       color: "rgba(0, 0, 0, 0)",
    //                   }
    //               }]
    //           }
    //       }
    //   };

  */

   }
  

}
