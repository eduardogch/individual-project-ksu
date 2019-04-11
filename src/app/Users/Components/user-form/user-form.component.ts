import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { User } from '../../Model/User';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  users: Array<User> = [];
  user: User = {
    title: '',
    text: ''
  };

  constructor(private _dataService: DataService) {
    this._dataService.getUsers()
      .subscribe(res => this.users = res);
  }

  onSubmit() {
    this._dataService.createUser(this.user)
      .subscribe(res => {
        console.log(res);
      });
  }

  ngOnInit() {
  }

}
