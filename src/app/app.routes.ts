import { Routes } from '@angular/router';
import { UserListComponent } from './Users/Components/user-list/user-list.component';
import { UserFormComponent } from './Users/Components/user-form/user-form.component';

export const AppRoutes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'create', component: UserFormComponent },
];
