import { Component } from '@angular/core';
import {Appservice} from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Appservice]
})
export class AppComponent {
  title = 'app works fine!';
  firstName:string='';
  secondName:string='';

  constructor(private _appService:Appservice){
   this.getFullName();
  }
  getFullName(){
    this.firstName=this._appService.getFirstName();
    this.secondName=this._appService.getSecondName();

  }
}
