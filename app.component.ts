
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent 
{ 
  title = "welcome to X/O";
  won = "have a good game";
  constructor()
  {
  }
  func(data:{n:string})
  {
    this.won = data.n + " is win!!";
  }
  
}