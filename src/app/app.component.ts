import { Component, OnInit } from '@angular/core';
import { ICONS } from 'src/consts';
import { Item, User } from 'src/types';
import { getUserName, logginMessage, tryAgainMessage } from './helpers/messages';
import { MockService } from './services/mock.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  icons: Item[] = ICONS; // toda la lista de iconos
  userName: string = ''; // nombre del usuario obtenido del modal
  passwordIcons: Item[] = []; // iconos que irán como contraseña
  isLoading: boolean = false; // loader
  isLogged: boolean = false; // banderilla para saber si está logueado

  constructor(private mockService: MockService) { }

  ngOnInit(): void {
    // modal para pedirle al usuario que ingrese el nombre
    getUserName().then((result) => {
      this.userName = result.value;
    });
  }

  // metodo para ordenar los iconos de manera aleatoria, es llamada siempre que se cliquea el botón "Aquí encontrarás animales"
  sortIcons() {
    this.icons.sort(() => (Math.random() > .5) ? 1 : -1);
  }

  // metodo para realizar la validación del login
  async login() {
    // se crea el json a enviar con el nombre de usuario y la contraseña
    const user: User = {
      name: this.userName,
      password: this.getIconsValue()
    }
    // iniciar loader
    this.isLoading = true;
    try {
      // obtenemos la respuesta del servicio
      const resp = await this.mockService.validateUser(user);
      if (resp.isValid) {
        // mensaje de que todo se realizó correctamente
        logginMessage(resp.message);
        // cambiar el estado a logueado
        this.isLogged = true;
      }
    } catch (error) {
      // manejo de errores cuando algo sale mal
      tryAgainMessage().then((result) => {
        if (result.isConfirmed) {
          location.reload();
        }
      });
    }
    // finalizar loader
    this.isLoading = false;
  }

  // los iconos tienen un tipado definido (Item), acá obtenemos el nombre de los 3 iconos seleccionados
  getIconsValue() {
    const newArray = [];
    for (const item of this.passwordIcons) {
      // agregamos solo el nombre especifico de cada icono
      newArray.push(item.name);
    }
    return newArray;
  }

}
