import { Injectable } from '@angular/core';
import { Response, User } from 'src/types';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor() { }

  // metodo para validar usuario
  validateUser(user: User): Promise<Response> {
    // devuelve una promesa
    return new Promise((resolve, reject) => {
      // timeout para simular petición a un servidor
      setTimeout(() => {
        if (user.name === 'juan' && user.password.join() === ['Gato', 'Perro', 'Caballo'].join()) {
          // si la validacion es correcta
          resolve(new Response(true, `Bienvenido ${user.name}`));
        } else {
          // si la validación es incorrecta
          reject(new Response(false, 'Parece que no estás registrado'));
        }
      }, 2000);
    });
  }
}
