import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { UsersModule } from './pages/users/users.module';
import { CategoriesModule } from './pages/categories/categories.module';
import { CategoriesComponent } from './pages/categories/categories.component';
import { PipesModule } from './pages/pipes/pipes.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule, 
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    UsersModule,
    CategoriesModule,
    PipesModule,
    SharedModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
