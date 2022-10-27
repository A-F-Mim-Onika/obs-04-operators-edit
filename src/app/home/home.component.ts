import { Component, OnDestroy, OnInit } from '@angular/core';

import { interval, Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // private firstObsSubscription: Subscription;

  message = 44;
  message1 = 22;
  theNumber: number;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
       
    // const theObservable = Observable.create((observer) =>{
    //   observer.next(this.message1);
    // });

    // this.firstObsSubscription = theObservable.subscribe((data) =>{
    //   this.message = data;
    // });
  }

  functionToSendData(event){
    this.userService.actiavtedEmitter.next(this.theNumber);
    console.log(event);
  }

  //ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });
  //   const customIntervalObservable = Observable.create(observer => {
  //     let count = 0;
  //     setInterval(() => {
  //       observer.next(count);
  //       if (count === 5) {
  //         observer.complete();
  //       }
  //       if (count > 3) {
  //         observer.error(new Error('Count is greater 3!'));
  //       }
  //       count++;
  //     }, 1000);
  //   });

  //   this.firstObsSubscription = customIntervalObservable.pipe(filter(data => {
  //     return data > 0;
  //   }), map((data: number) => {
  //     return 'Round: ' + (data + 1);
  //   })).subscribe(data => {
  //     console.log(data);
  //   }, error => {
  //     console.log(error);
  //     alert(error.message);
  //   }, () => {
  //     console.log('Completed!');
  //   });
  // }

  // ngOnDestroy(): void {
  //   this.firstObsSubscription.unsubscribe();
  // }

}
