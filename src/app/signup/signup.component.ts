import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class  SignupComponent {

registrarUsuario() {

    Swal.fire({
      title: 'Exito',
      text: 'Tu cuenta fue creada exitosamente.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }
}
