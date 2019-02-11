import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tscomp = "I am from ts component";
  clickHandler(){
    alert("I am clicked");
  }
}
