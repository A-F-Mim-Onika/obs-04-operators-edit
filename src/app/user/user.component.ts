import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private userService2: UserService ) {
  }

  ngOnInit() { 
    this.userService2.actiavtedEmitter.subscribe((fromObservable) =>{
      this.id = fromObservable;  
    });
  }

  onActivate(){
  }

}
