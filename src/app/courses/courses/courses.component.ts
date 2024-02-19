import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',

})
export class CoursesComponent implements OnInit {

  courses: Observable<Course[]>;

  displayedColumns = ["name", "category"]

  constructor(private coursesService: CoursesService) {
    this.courses = this.coursesService.getCourses();
  }

  ngOnInit(): void { }
}
