import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }
  getAllEmployees():Observable<any>
  {
    return this.httpClient.get<any>("https://localhost:7151/api/employee");
  }
  saveEmployee(employee:Employee):Observable<any>
  {
    return this.httpClient.post<any>("https://localhost:7151/api/employee",employee);
  }
  updateEmployee(employee:Employee):Observable<any>
  {
    return this.httpClient.put<any>("https://localhost:7151/api/employee",employee);
  }
  deleteEmployee(id:number):Observable<any>
  {
    return this.httpClient.delete<any>("https://localhost:7151/api/employee/" + id);
  }
}
