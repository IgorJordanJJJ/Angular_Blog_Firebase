import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../interfaces";

@Component({
  selector: 'app-three-d-post',
  templateUrl: './three-d-post.component.html',
  styleUrl: './three-d-post.component.scss'
})
export class ThreeDPostComponent implements OnInit{
  @Input() post!: Post

  constructor() { }

  ngOnInit() {
  }
}
