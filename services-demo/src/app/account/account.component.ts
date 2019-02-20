import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { LoggingService} from '../logging.service';
import { AccountsService } from '../accounts.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService]
})
export class AccountComponent implements OnInit {

  @Input() account:{name: string, status: string};
  @Input() id:number;
  

  constructor(private loggingService: LoggingService, private accountsService:AccountsService) { 
  }

  ngOnInit() {
  }

  onSetTo(status: string){
    this.accountsService.updateAccount(this.id,status);
  //  this.loggingService.logStatusChange('Status updated to ' + status);
  }

}
