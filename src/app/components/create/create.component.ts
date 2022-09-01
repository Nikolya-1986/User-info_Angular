import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public errorMsg: any;
  public successMsg: any;
  public userId: any;

  constructor(
    private _userService: UserService,
    private _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this._getUser();
  }

  public userReactiveForm = new FormGroup({
    'name': new FormControl('', Validators.required),
    'email': new FormControl('', Validators.required),
    'mobile': new FormControl('', Validators.required),
  });

  public userSubmit() {
    const user = this.userReactiveForm.value;
    if(user) {
      this._userService.createUser(user).subscribe((result) => {
        console.log('User created', result);
        this.userReactiveForm.reset();
        this.successMsg = result.message;
      })
    } else {
      this.errorMsg = 'All fields are reqired'
    }
  };

  public updateUser() {
    if(this.userReactiveForm.valid) {
      this._userService.updateUser(this.userReactiveForm.value, this.userId).subscribe((result) => {
        console.log('User updated successfull', result);
        this.userReactiveForm.reset();
        this.successMsg = result.message;
      })
    } else {
      this.errorMsg = 'All fields are reqired'
    }
  };

  private _getUser() {
    this.userId = this._activatedRoute.snapshot.paramMap.get('id');
    if(this.userId) {
      this._userService.getUser(this.userId).subscribe((result) => {
        console.log('User for update', result);
        this.userReactiveForm.setValue({
          name: result.data[0].name,
          email: result.data[0].email,
          mobile: result.data[0].mobile,
        });
        this.successMsg = result.message;
      })
    }
  };

}
