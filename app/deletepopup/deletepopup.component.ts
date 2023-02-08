import { Component,OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Course } from '../Models/course.model';
import { CourseServiceService } from '../course-service.service';
@Component({
  selector: 'app-deletepopup',
  templateUrl: './deletepopup.component.html',
  styleUrls: ['./deletepopup.component.css']
})
export class DeletepopupComponent {
  constructor( public dialogRef: MatDialogRef<DeletepopupComponent>, private courseService: CourseServiceService) {
   
  }
  deleterecord(){
   console.log(1);
  }
}
