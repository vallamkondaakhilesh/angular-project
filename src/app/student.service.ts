import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:8080/students';

  private baseUrl1 = 'http://localhost:8080/student';

  constructor(private http : HttpClient) { }

  getStudent(id : number) : Observable<any>{
    return this.http.get(`${this.baseUrl1}/${id}`);
  }

  addStudent(student : Object) : Observable<Object>{
    return this.http.post(`${this.baseUrl1}`, student);
  }

  updateStudent(student : Object) : Observable<Object>{
    return this.http.put(`${this.baseUrl1}`, student);
  }

  deleteStudent(id : number) : Observable<any>{
    return this.http.delete(`${this.baseUrl1}/${id}`, { responseType : 'text'});
  }

  getStudentList() : Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

}