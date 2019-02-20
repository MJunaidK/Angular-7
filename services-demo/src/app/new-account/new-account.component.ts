import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoggingService} from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {

  @Output() accountAdded =  new EventEmitter<{name: string, status: string}>();
  constructor(private loggingService: LoggingService) { 

  }

  ngOnInit() {
  }

  onCreateAccount(accountName: string, accountStatus: string){
    this.accountAdded.emit({name: accountName,status: accountStatus});
    //Incorrect way to instantiate a service
     //const service = new LoggingService();
     //service.logStatusChange('A server status changed, new status: '+ accountStatus);

     this.loggingService.logStatusChange(accountStatus);
  }

}
