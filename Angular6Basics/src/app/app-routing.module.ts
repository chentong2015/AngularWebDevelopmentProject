import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// add component to router
import { UsersComponent} from  './users/users.component';
import { DetailsComponent} from  './details/details.component';
import { PostsComponent} from  './posts/posts.component';

// set the path to component
const routes: Routes = [
  { path: "", component: UsersComponent }, 
  { path: "details/:id", component: DetailsComponent },  // Set id to get the parameter
  { path: "posts", component: PostsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
