import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams} from '@angular/common/http'
import { catchError, Observable,throwError } from 'rxjs';
import { Course } from './Models/course.model';
@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  constructor(private http:HttpClient) { }
  getCourse():Observable<any[]>{
    let url="https://localhost:7028/api/v1.0/lms/Course/getAll";
    return this.http.get<any[]>(url);
    }
  login(email: string, password: string){
    const params: HttpParams = new HttpParams()
    .set('email',email)
    .append('password',password)
    let url="https://localhost:7028/api/User/login/"+email+"/"+password;
    return this.http.get(url);
  }
  addCourse(val:any){
    let url="https://localhost:7028/api/v1.0/lms/Course/add";
    return this.http.post<Course>(url,val);

  }
  deleteCourse(val:any){
    let url="https://localhost:7028/api/v1.0/lms/Course/delete";
    return this.http.post<Course>(url,val);

  }
//   addCourse(course:Course):Observable<Task>{
//     let url="https://localhost:7028/api/v1.0/lms/Course/add";
//     return this.http.post<Task>(url,course);
//     }
}
