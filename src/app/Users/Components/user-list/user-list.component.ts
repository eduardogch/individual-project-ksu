import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  title = 'CRUD project with MEAN stack :)';
  users: Array<Object> = [];
  private user: Object = {};

  constructor(private _dataService: DataService) {
    this._dataService.getUsers()
      .subscribe(res => this.users = res);
  }

  ngOnInit() {}

  onUserDelete(userId: String) {
    this._dataService.deleteUser(userId)
      .subscribe(res => {
        this.users = this.users.filter( (user: any) => {
          return user._id != userId;
        });
        console.log(res)
      });
  }

}
