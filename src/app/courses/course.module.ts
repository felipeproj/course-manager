import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StarModule } from '../shared/component/star/star.module';
import { CourseInfoComponent } from './pages/course-info/course-info.component';
import { CourseListComponent } from './pages/course-list/course-list.component';
import { AppPipeModule } from '../shared/pipe/app-pipe.module';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    StarModule,
    AppPipeModule,
    RouterModule.forChild([
      {
        path: 'courses',
        component: CourseListComponent
      },
      {
        path: 'courses/info/:id',
        component: CourseInfoComponent
      },
      {
        path: 'courses/info',
        component: CourseInfoComponent
      },
    ])
  ]
})
export class CourseModule {

}