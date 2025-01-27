import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  imports: [RouterLink],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  employees: Employee[] =[]
  constructor(private employeeService: EmployeeService){
    this.loadAllEmployees()
  }

  loadAllEmployees(){
    this.employeeService.getAllEmployees().subscribe((data)=>{
      console.log(data); 
      this.employees = data;     
    })
  }

  handleDelete(id: number){
    const result = confirm('Are you sure, do you want to delete the employee?')
    if(result){
      this.employeeService.deleteEmployee(id).subscribe({
        next: ()=>{
          this.loadAllEmployees()
        },
        error: (error)=>{
          console.log(error);          
        }
      })
    }
  }
}
