import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students:Observable<Student[]>;
  //student : Student=new Student();  

  constructor(private studentService: StudentService,
    private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.students=this.studentService.getStudentList();
  }
  deleteStudent(id : number){
    this.studentService.deleteStudent(id)
     .subscribe(
       data => {
         console.log(data);
         this.reloadData();
       },
       error => console.error(error));
  }

  updateStudent(id : number){
    this.router.navigate(['update', id]);
  }

}
