import { Routes } from '@angular/router';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { EditEmployeeComponent } from './pages/edit-employee/edit-employee.component';

export const routes: Routes = [
    {path: '', redirectTo:'/employees', pathMatch: 'full'},
    {path: 'employees', component: EmployeeListComponent},
    {path: 'employees/add', component: AddEmployeeComponent},
    {path: 'employees/:id', component: EditEmployeeComponent}
];
