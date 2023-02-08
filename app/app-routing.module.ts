import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CourseComponent } from './course/course.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{path:'course', component:CourseComponent}
,{path:'login', component:LoginComponent}
,{path:'admin', component:AdminComponent}
,{path:'**', component:LoginComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
