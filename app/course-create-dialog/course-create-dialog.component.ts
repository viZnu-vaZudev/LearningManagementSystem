import { Component, Injector, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder}  from '@angular/forms'
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Course } from '../Models/course.model';
import { CourseServiceService } from '../course-service.service';

@Component({
  selector: 'app-course-create-dialog',
  templateUrl: './course-create-dialog.component.html',
  styleUrls: ['./course-create-dialog.component.css']
})
export class CourseCreateDialogComponent {
  animal: string | undefined;
  name: string | undefined;
  personname: string | undefined;
  expensetype: string | undefined;
  expenseamount:number|undefined;
  expensecomment:string|undefined;
  expensedate: any
  selected = '2';
  expenseform !:FormGroup;
  course:Course={
    courseID:0,
    courseName: '',
  technology: '',
  courseDescription: '',
  courseDuration:0,
  launchUrl: ''
  }
  constructor( public dialogRef: MatDialogRef<CourseCreateDialogComponent>, private courseService: CourseServiceService) {
   
  }

  ngOnInit(): void {
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save =  () => {
  if(this.course.courseName !== null && this.course.courseName !== "")
  {
    this.courseService.addCourse(this.course).subscribe(res=>{
      alert(res.courseName.toString() + "Saved");
    });
  }
    this.dialogRef.close();
  }
  cancel =  () => {
    this.dialogRef.close();
  }
  clear =  () => {
    this.personname = "me";
  this.expensetype = "2"
  this.expenseamount=0;
  this.expensecomment="";
  this.expensedate="";
  this.selected = '2';
  }
}
