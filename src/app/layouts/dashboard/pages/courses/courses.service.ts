import { Injectable } from "@angular/core";
import { delay, finalize, of } from "rxjs";
import { Course } from "./models";
import { LoadingService } from "../../../../core/services/loading.service";
import { HttpClient } from "@angular/common/http";

let courses: Course[] = [
        {
            id: 1,
            name: 'Nest.js',
            createdAt: new Date(),   
        },        
        {
            id: 2,
            name: 'AWS Cloud',
            createdAt: new Date(),   
        },
        {
            id: 3,
            name: 'React',
            createdAt: new Date(),   
        }, 

    ];

@Injectable()
export class CoursesService {

    constructor(private loadingService: LoadingService, private httpClient: HttpClient){

    }

    getCourses(){
      this.loadingService.setIsLoading(true)
      return this.httpClient
      .get<Course[]>('http://localhost:3000/courses')
      .pipe(finalize(() => this.loadingService.setIsLoading(false)));
   } 

   createCourse(data: Course ){
    courses = [...courses,{...data, id: courses.length + 1 }];
    return this.getCourses();
   }

   deleteCourseById(id: number){
     courses = courses.filter((el) => el.id != id)
     return this.getCourses(); 
    }

    updateCourseById(id: number, data: Course){
        courses = courses.map((el) => el.id === id ? {...el, ...data} : el);
        return this.getCourses();
    }
}