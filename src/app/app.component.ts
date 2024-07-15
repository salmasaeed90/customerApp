import { Component,  ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CustomersService } from './customers.service';
import { ChartingComponent } from './charting/charting.component';
import { Customer,  Transactions } from './data.modal';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ChartingComponent, FormsModule, FilterPipe],
  templateUrl: './app.component.html'
})
export class AppComponent {
  allCustomers:any[]=[];
  allCustomersTransactions:Transactions[]=[];


  allCustomerData:any[]=[]

  selectedCustomerId!:number;
  searchTerm:string = "";

  @ViewChild('chart') chart!:ChartingComponent;

  constructor(private _CustomersService:CustomersService,
    private _Router:Router
  ){}



  ngOnInit():void{
    this.displayCustomersData();
    this.displayTransactions();
    //console.log(this.searchTerm);
    
  }

  displayCustomersData(){
    this._CustomersService.getAllCustomers().subscribe({
      next:(response)=>{
        console.log(response);
        this.allCustomers = response.customers;
        this.mergeAllCustomersData();
      }
    })

  }
  displayTransactions(){
    this._CustomersService.getAllCustomersTransactions().subscribe({
      next:(data)=>{
        console.log(data);
        this.allCustomersTransactions = data.transactions;
        this.mergeAllCustomersData();
      }
    })
  }
  mergeAllCustomersData(){
    const allData = this.allCustomers.map((customer) =>{
      const transaction = this.allCustomersTransactions.filter(transaction=>transaction.customer_id == customer.id)
      return {
        ...customer,
        transactions:transaction
      }
    })
    this.allCustomerData = allData;
    console.log(this.allCustomerData);
  }

  openGraph(id:any){
      this.selectedCustomerId = id;
      this.chart?.oncustomerSelected();
    }

  get selectCustomer(){
    return this.allCustomerData.find((customer)=> customer.id === this.selectedCustomerId);
  }
  
}
