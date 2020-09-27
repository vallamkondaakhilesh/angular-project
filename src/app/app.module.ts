import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddExamComponent } from './add-exam/add-exam.component';
import { ExamListComponent } from './exam-list/exam-list.component';
import { StudentComponent } from './student/student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { AddMarksComponent } from './add-marks/add-marks.component';
import { MarksListComponent } from './marks-list/marks-list.component';
import { UpdateMarksComponent } from './update-marks/update-marks.component';

@NgModule({
  declarations: [
    AppComponent,
    AddExamComponent,
    ExamListComponent,
    StudentComponent,
    AddStudentComponent,
    StudentListComponent,
    StudentDetailsComponent,
    UpdateStudentComponent,
    AddMarksComponent,
    MarksListComponent,
    UpdateMarksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
