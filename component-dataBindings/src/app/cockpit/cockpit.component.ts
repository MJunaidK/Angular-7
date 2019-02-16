import { Component, OnInit, EventEmitter, Output } from '@angular/core';

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

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  newServerName= '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(){
    this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }

  onAddBluePrint(){
    this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }

}
