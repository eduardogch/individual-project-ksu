import { Routes } from '@angular/router';

import { TodoListComponent } from './Users/Components/todo-list/todo-list.component';
import { TodoFormComponent } from './Users/Components/todo-form/todo-form.component';

export const AppRoutes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'create', component: TodoFormComponent },
];
