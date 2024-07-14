import { Component, input } from '@angular/core';
import { customerData } from '../data.modal';
import {Chart, registerables} from 'chart.js';


Chart.register(...registerables);

@Component({
  selector: 'app-charting',
  standalone: true,
  imports: [],
  templateUrl: './charting.component.html'
})
export class ChartingComponent {
  selectCustomer = input.required<customerData>();
  get date(){
    return this.selectCustomer().transactions.map(tra => tra.date)
  }
  get amount(){
    return this.selectCustomer().transactions.map(tra => tra.amount)
  }
  chart!:any;
  ngOnInit() {
    console.log(this.amount);
    console.log(this.date);
     this.renderChart()
    
   
  }

  renderChart(){
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels:this.date,
        datasets: [
          {
            label: 'Amount',
            data:this.amount ,
            borderWidth: 1,
            
          },
        ],
      },
      options: {
        backgroundColor:"#f97316",
        scales: {
          y: {
            beginAtZero: true,
          },
        
        },
      },
    });
  }
  updateDateAndAmount(){
    if (this.chart) {
      this.chart.data.labels = this.date;
      this.chart.data.datasets[0].data = this.amount;
      this.chart.update();
    }
  }

  oncustomerSelected(){
    this.updateDateAndAmount();
  }
}
// [12, 19, 3, 5, 2, 3]  ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']