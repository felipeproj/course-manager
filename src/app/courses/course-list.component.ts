import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
  private filterBy: string;
  private courses: Course[] = [];

  filteredCourses: Course[] = [];

  set filter(value: string) {
    this.filterBy = value;
    // tslint:disable-next-line: max-line-length
    this.filteredCourses = this.courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this.filterBy.toLocaleLowerCase()) > -1);
  }
  get filter(): string {
    return this.filterBy;
  }

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void {
    this.courseService.retrieveAll().subscribe({
      next: courses => {
        this.courses = courses;
        this.filteredCourses = this.courses;
      },
      error: err => console.log('Error', err)
    });
  }

  deleteById(id: number): void {
    this.courseService.deleteById(id).subscribe({
      next: () => {
        console.log('Deleted with success');
        this.retrieveAll();
      },
      error: err => console.log('Error', err)
    })
  }
}