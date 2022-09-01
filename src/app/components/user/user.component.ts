import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public users: any;
  public successMsg!: string;

  constructor(
    private _userService: UserService,
  ) { }

  ngOnInit(): void {
    this._getAllUsers();
  };

  public deleteUser(id: number): void {
    this._userService.deleteUser(id).subscribe((result) => {
      console.log('Deleted user', result);
      this.successMsg = result.message;
      this._getAllUsers();
    })
  };

  private _getAllUsers(): void {
    this._userService.getAllUser().subscribe((result) => {
      console.log('All users', result);
      this.users = result.data;
    })
  };

}
