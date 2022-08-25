import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HospitalManagementSystem';
  name:string = "";
  completed:number = 0;
  details : {name:string; completed:number}[] = [];
  insert(){
    this.details.push({name:this.name, completed:this.completed});
    this.name = "";
    this.completed = 0;
  }
  remove(){
    this.details.pop();
    this.name = "";
    this.completed = 0;
  }
  

}
