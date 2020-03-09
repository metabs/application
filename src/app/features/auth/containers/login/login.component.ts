import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from '@app/core/auth';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {

  public readonly form = this.fb.group({
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', [Validators.required, Validators.minLength(6)])
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });

    // this.authService.signUp({
    //   email: 'ld@test.com',
    //   password: 'ciau139!,1)=19'
    // }).subscribe(console.log, console.log);
  }

}
