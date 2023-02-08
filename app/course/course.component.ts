import { Component,OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { CourseCreateDialogComponent } from '../course-create-dialog/course-create-dialog.component';
import { CourseServiceService } from '../course-service.service';
import { DeletepopupComponent } from '../deletepopup/deletepopup.component';
import { Course } from '../Models/course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courseList: any;
  animal: string | undefined;
  name: string | undefined;
  panelOpenState = false;
  // courseName: string|undefined;
  // technology: string|undefined;
  // courseDurationFrom:number|undefined;
  // courseDurationTo:number|undefined;
  courses: Course[]=[];
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent: PageEvent|undefined;

  constructor(private courseService: CourseServiceService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCourse();
  }

  getCourse(){
    this.courseService.getCourse().subscribe(res=>{
      this.courses = res;
    })
  }
  bindCourse(){
    if(this.courses !== null)
    {
      alert(this.courses);
    }
  }
  createcourse(){
    alert('Save Succusfully');
    this.getCourse();
  }

  openAddEditEmpForm() {
    const dialogRef = this.dialog.open(CourseCreateDialogComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
          this.getCourse();
      },
    });
  }

  opendeleteEmpForm() {
    const dialogRef = this.dialog.open(DeletepopupComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
          this.getCourse();
      },
    });
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  editcourse(){
    this.openAddEditEmpForm();
  }
  deleteCourse(){
    this.opendeleteEmpForm();
  }

}
