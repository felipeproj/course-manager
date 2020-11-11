import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courseUrl: string = 'http://localhost:3100/api/courses'

  constructor(private _httpClient: HttpClient) {}

  retrieveAll(): Observable<Course[]> {
    return this._httpClient.get<Course[]>(this.courseUrl);
  }

  retrieveById(id: number): Observable<Course> {
    return this._httpClient.get<Course>(`${this.courseUrl}/${id}`);
  }

  save(course: Course): Observable<Course> {
    if (course.id) {
      return this._httpClient.put<Course>(`${this.courseUrl}/${course.id}`, course);
    } else {
      return this._httpClient.put<Course>(`${this.courseUrl}`, course);
    }
  }

  deleteById(id: number): Observable<any> {
    return this._httpClient.delete<any>(`${this.courseUrl}/${id}`);
  }
}