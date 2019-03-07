import { Component, OnInit } from '@angular/core';
import { Observable, interval, Observer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   // const myNumbers = interval(1000); 
   // myNumbers.subscribe(
   //  (number: number) => {
   //     console.log(number);
   //   }
  // );

  const myObservable = Observable.create(
    (observer: Observer<String>) => {
      setTimeout(() => {
        observer.next('first package');
      },2000);
      setTimeout(() => {
        observer.next('Second package');
      },4000);
      setTimeout(() => {
       // observer.next('this does not work');
       observer.complete();
      },5000);
      setTimeout(() => {
        observer.next('Third package');
       },6000);
    });

    myObservable.subscribe(
      (data: string) => { console.log(data)},
      (error: string) => { console.log(error)},
      () => { console.log('completed')}
    )
  }

}
