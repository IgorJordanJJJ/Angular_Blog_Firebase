import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../shared/interfaces";
import {PostsService} from "../shared/posts.service";

@Component({
  selector: 'app-new-home-page',
  templateUrl: './new-home-page.component.html',
  styleUrl: './new-home-page.component.scss'
})
export class NewHomePageComponent implements OnInit{
  posts$!: Observable<Post[]>

  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
    this.posts$ = this.postsService.getAll()
  }
}
