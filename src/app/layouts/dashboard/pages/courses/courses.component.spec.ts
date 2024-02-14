import { TestBed } from "@angular/core/testing"
import { CoursesComponent } from "./courses.component"
import { MockProvider } from "ng-mocks";
import { CoursesService } from "./courses.service";
import { of } from "rxjs";

describe('Pruebas de CoursesComponent', () => {
    let component: CoursesComponent;
    
    beforeEach(() =>{
        TestBed.configureTestingModule({
            declarations: [CoursesComponent],
            providers: [MockProvider(CoursesService, {
                getCourses: () => of ([
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
                ])
            })]
        });

        component = TestBed.createComponent(CoursesComponent).componentInstance;
    })

    it(
        'Las comulnas de la tabla de cursos deben ser (displayedColumns): "id", "courseName", "createdAt", "actions"', () => {
          
           expect(component.displayedColumns).toContain('id');
           expect(component.displayedColumns).toContain('courseName');
           expect(component.displayedColumns).toContain('createdAt');
           expect(component.displayedColumns).toContain('actions');
        }
    );

})