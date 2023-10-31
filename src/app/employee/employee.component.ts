import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  employeesList:Employee[]=[];
  newEmployee:Employee = new Employee();
  editEmployee:Employee = new Employee();

  constructor(private employeeService:EmployeeService)
  {
  }
  ngOnInit(){
    this.getAll();
  }
  getAll()
  {
    this.employeeService.getAllEmployees().subscribe(
      (response)=>{
        this.employeesList = response;
        console.log(this.employeesList);
      },
      (error)=>{
        console.log(error);
      }
    );
  }
}
