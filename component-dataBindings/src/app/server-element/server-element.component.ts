import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy } from '@angular/core';

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

  constructor() {
    console.log('constructor called!');
   }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!');
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
  }

  // Called after each change detection cycle
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called!');
  }

 }
