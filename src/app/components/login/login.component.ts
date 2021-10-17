import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faUser = faUser;
  faLock = faLock;
  user: string;
  password: string;
  constructor(private router: Router) {
    this.user = '',
    this.password = ''
  }

  ngOnInit(): void {
  }
  inicioSesion() {
    const usuario ={
      user: this.user,
      password: this.password
    }
    if (usuario.user == 'admin' && usuario.password == '1234') {
      this.router.navigate(['/dashboard/inicio']);
    }
  }

}
