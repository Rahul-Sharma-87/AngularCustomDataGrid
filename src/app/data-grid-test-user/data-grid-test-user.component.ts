import { Component, OnInit } from '@angular/core';
import { Column } from '../data-grid/data-grid.component';

@Component({
  selector: 'app-data-grid-test-user',
  templateUrl: './data-grid-test-user.component.html',
  styleUrls: ['./data-grid-test-user.component.css']
})
export class DataGridTestUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  gridColumns=[
    new Column(1,"name","Name",true,true),
    new Column(2,"salary","Salary",true,false),
    new Column(3,"department","Department",false,true),
    new Column(4,"doj","Date Of Joining",true,false)
  ]

  employeeArr=  [
    { name:"Raj", salary:"1000", department:"IT", doj:"10 Feb 2019" },
    { name:"Rajesh", salary:"2000", department:"IT", doj:"10 Feb 2019" },
    { name:"Manoj", salary:"3000", department:"IT", doj:"10 Feb 2019" },
    { name:"Vikram", salary:"4000", department:"IT", doj:"10 Feb 2019" },
    { name:"Raj", salary:"1000", department:"IT", doj:"10 Feb 2019" },
    { name:"Rajesh", salary:"2000", department:"IT", doj:"10 Feb 2019" },
    { name:"Manoj", salary:"3000", department:"IT", doj:"10 Feb 2019" },
    { name:"Vikram", salary:"4000", department:"IT", doj:"10 Feb 2019" },
    { name:"Raj", salary:"1000", department:"IT", doj:"10 Feb 2019" },
    { name:"Rajesh", salary:"2000", department:"IT", doj:"10 Feb 2019" },
    { name:"Manoj", salary:"3000", department:"IT", doj:"10 Feb 2019" },
    { name:"Vikram", salary:"4000", department:"IT", doj:"10 Feb 2019" }
  ]
}
