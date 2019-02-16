import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  // we added @input to make a property bindable from outside.
  // Now we need to add something to a server created and blueprint created to make it kind of listenable from outside.
  //  it's not input because we're not getting something passed into this component
 //  It's  @output with parentheses because we're passing something out of the component 

  @Output('svCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

 // newServerName= '';
 // newServerContent = '';
    // This works without two way binding but with local references passed to methods or local references fetched through view child.
    // With viewChild we get direct access to element in our dom , in our template 
  @ViewChild('serverContentInput') serverContentInput : ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement){
    this.serverCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBluePrint(nameInput: HTMLInputElement){
    this.blueprintCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
