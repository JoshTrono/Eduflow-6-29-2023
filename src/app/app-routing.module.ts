import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { FormValidationsComponent } from './components/form-validations/form-validations.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path: 'counter', component: CounterComponent},
  {path: 'todo', component: ToDoListComponent},
  {path: 'validate', component: FormValidationsComponent},
  {path: 'search', component: SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
