import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = + params['id'];
        }
      )
  }

  // Use Subject instead of eventemitter for cross component communication.
  // Use subject to emit data as observable in child component
  // Use Subject to subscribe for data as observer in parent component 
  onActivate(){
    this.usersService.userActivated.next(this.id);
  }

}
