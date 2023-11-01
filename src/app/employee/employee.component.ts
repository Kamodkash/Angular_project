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
  
saveClick()
{
  //alert(this.newEmployee.name)
  this.employeeService.saveEmployee(this.newEmployee).subscribe(
    (response)=>{
      alert('Data Saved!!!')
      this.getAll();
      this.clear_Rec();
    },
    (error)=>{
      console.log(error);
    }
  );
}
clear_Rec(){
  this.newEmployee.name="";
  this.newEmployee.address="";
  this.newEmployee.salary = 0;
}
editClick(d:any)
{
  //alert(d.name)
  this.editEmployee=d;
}
updateClick()
{
  this.employeeService.updateEmployee(this.editEmployee).subscribe(
    (response)=>{
      alert('Data Updated!!')
      this.getAll();
    },
    (error)=>{
      console.log(error)
    }
  );
}
deleteClick(id:number){
  let ans = window.confirm('Want To Delete ?');
  if(!ans) return;
  this.employeeService.deleteEmployee(id).subscribe(
    (response)=>{
      alert('Data deleted!!!')
      this.getAll();
    },
    (error)=>{
      console.log(error);
    }
  )
}
}

