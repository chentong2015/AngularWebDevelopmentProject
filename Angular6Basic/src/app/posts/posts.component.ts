import { Component, OnInit } from '@angular/core';
// use the data service in this component
import { DataService } from '../data.service';
// treate the data return form API  ===> subscribe !!!
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPosts().subscribe(data => this.posts = data);
  }

}
