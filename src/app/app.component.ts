import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count:number = 0;
  show:boolean = true;

  onButtonClick()
  {
    this.count++;
  }

  onstarDBLClick(){
    this.show = !this.show;
  }
}
