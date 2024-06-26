import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ChartEvent } from 'chart.js/dist/core/core.plugins';
Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})

export class ChartComponent implements OnInit {

  myChart: any;

  chartData = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 }
  ];

  ngOnInit () {
      this.myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: this.chartData.map(item => item.year),
          datasets: [{
              label: 'Acquisitions by year',
              data: this.chartData.map(item => item.count),
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          // animation: false, 
          layout: {
            padding: 150
          },
          scales: {
            x: {
              stacked: false
            },
            y: {
                stacked: true,
                beginAtZero: true
            }
          },
          onClick: (event:ChartEvent) => {
            let activePoint = this.myChart.getElementsAtEventForMode(event,'index', { intersect: true }, false);
            console.log("activeElement", activePoint);
            const point = activePoint[0]["element"]["$context"]["parsed"]["y"];
            this.handleBarClick(point);
            
          },
          plugins: {
            legend: {
              display: true,
              position: "bottom",
              labels: {
                color: 'rgb(220, 99, 132)',
                padding: 20,
              },
              onClick: this.newLegendClickHandler
            },
            tooltip: {
              enabled: true
            },
            title: {
              display: false,
              text: 'Custom Chart Title'
            },
            subtitle: {
              display: false,
              text: 'Custom Chart Subtitle'
            }
          }
      }
    });
  }

  handleBarClick (point:any) {
    console.log("5555555", point);
  }

  newLegendClickHandler () {
    console.log("Legends clicked")
  }

}
