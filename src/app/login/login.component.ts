import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    localStorage.removeItem('usuario');
  }


  enviardatos(e: any) {

    e.preventDefault();
    console.log('Formulario enviado');
    const formdata = new FormData(e.target);

    const username = formdata.get('username');
    const password = formdata.get('password');

    if (username === 'admin' && password === 'admin') {
      window.location.href = '/inicio';

      localStorage.setItem('usuario', username);

    }

    else{
      alert('Usuario o contraseña incorrectos');
    }


  }

}
