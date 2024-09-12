import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) { }

  addEmployee(data: any): Observable<any> {
    //return this._http.post('https://localhost:44380/api/Employees', data);
    //return this._http.post('/api/Employees', data);
    return this._http.post('http://localhost:3000/employees', data);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    //return this._http.put(`https://localhost:44380/api/Employees/${id}`, data);
    //return this._http.put(`/api/Employees/${id}`, data);
    return this._http.put(`http://localhost:3000/employees/${id}`, data);
  }

  getEmployeeList(): Observable<any> {
    //return this._http.get('https://localhost:44380/api/Employees');
    //return this._http.get('/api/Employees');
    return this._http.get('http://localhost:3000/employees');
  }

  deleteEmployee(id: number): Observable<any> {
    //return this._http.delete(`https://localhost:44380/api/Employees/${id}`);
    console.log("ID for request:"+ id);

    //return this._http.delete(`/api/Employees/${id}`);
    return this._http.delete(`http://localhost:3000/employees/${id}`);
  }
}
