import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  userActivated = false;
  private acvivatedSubscription: Subscription;

  constructor(private userService: UserService) {
    

  }

  ngOnInit() {

    this.acvivatedSubscription = this.userService.actiavtedEmitter.subscribe(
      (didActivate) => {
        this.userActivated = didActivate;
      }
    );
  }

  ngOnDestroy(){
    this.acvivatedSubscription.unsubscribe();

  }


}
