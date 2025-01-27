import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiBaseUrl = (import.meta.env['NG_APP_API_BASE_URL'] || "http://localhost:8080")+"/employees"
  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiBaseUrl)
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiBaseUrl, employee)
  }

  getAnEmployee(id: number): Observable<Employee>{
    return this.http.get<Employee>(`${this.apiBaseUrl}/${id}`)
  }

  updateEmployee(employee: Employee): Observable<Employee>{
    return this.http.put<Employee>(`${this.apiBaseUrl}/${employee.id}`, employee)
  }

  deleteEmployee(id: number){
    return this.http.delete<any>(`${this.apiBaseUrl}/${id}`)
  }
}
