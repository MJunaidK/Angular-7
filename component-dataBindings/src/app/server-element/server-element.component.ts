import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
    OnInit, 
    OnChanges, 
    DoCheck, 
    AfterContentInit, 
    AfterContentChecked,
    AfterViewInit,
    AfterContentChecked,
    OnDestroy {

  @Input('srvelement') element: {type: string, name : string, content: string};
  @Input() name:string;
  @ViewChild('heading') header: ElementRef; 

  constructor() {
    console.log('constructor called!');
   }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('Text content in ngOnInit' + this.header.nativeElement.textContent);
  }

  ngDoCheck(){
    console.log("ngDoCheck called!");
   }

  //Called whenever the content that is projected by ngContent has been intialized.Not the view of the component itself but instead view of the parent compoent, the part that will be added to our component through ng-content
  ngAfterContentInit(){
    console.log('ngAfterContentInit called!');
  }

  // Called after each change detection cycle
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called!');
  }
  // called once the view of our own component has been finished intializing/ once the view is rendered
  ngAfterViewInit(){
    console.log('ngAfterViewInit called!');
    // So that is the difference between points of time where it is Hooke's run ngAfterViewInit gives
    //you access to the template elements.You can then access them and use their values and so on.
    //You can't check the value of some element in your dorm because it hasn't been rendered yet.
    console.log('Text content in AfterViewInit ' + this.header.nativeElement.textContent);
  }

  // Called after each change detection cycle
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called!');
  }

 }
