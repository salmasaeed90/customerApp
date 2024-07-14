export interface  Customer{
    id:number,
    name:string
  }
  
  export interface Transactions{
    id:number,
    customer_id:number,
    date:string,
    amount:number
  }

  export interface customerData{
    id:number,
    name:string,
    transactions:[
        {id:number,
        customer_id:number,
        date:string,
        amount:number
        },
        {
        id:number,
        customer_id:number,
        date:string,
        amount:number
        }
    ]
  }