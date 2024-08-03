import {Component} from '@angular/core';

export interface Post {
  id?: number,
  uuid: string,
  title: string,
  author: string,
  content: string,
  createdAt: string,
  updatedAt: string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
