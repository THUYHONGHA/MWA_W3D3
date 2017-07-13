import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {StudentComponent} from './student/student.component';
import {ProfileComponent} from './profile/profile.component';
import {ErrorComponent} from './error/error.component';
import {ProfileGuard} from './profile/profile-guard';


const MY_ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'student', component: StudentComponent},
  {path: 'student/profile/:id', component: ProfileComponent, canActivate: [ProfileGuard]},
  {path: '**', component: ErrorComponent}
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
