import { Component, OnInit } from '@angular/core';
import { StudentModel } from './route5-student-model';
import * as students from './studentData.json';

@Component({
  selector: 'app-route5',
  templateUrl: './route5.component.html',
  styleUrls: ['./route5.component.css']
})
export class Route5Component implements OnInit{
  title = 'Student Marks';

  studentData: StudentModel[] = [];

loadStudentData(){
  const student = this.studentData;
}

ngOnInit(){ 
  this.studentData = students.default;
  console.log(this.studentData);
}
}