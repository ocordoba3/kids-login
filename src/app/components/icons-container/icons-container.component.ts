import { Component, Input, OnInit } from '@angular/core';
import { confirmAdd } from 'src/app/helpers/messages';
import { ICONS } from 'src/consts';
import { Item } from 'src/types';

@Component({
  selector: 'app-icons-container',
  templateUrl: './icons-container.component.html',
  styleUrls: ['./icons-container.component.scss']
})
export class IconsContainerComponent implements OnInit {

  @Input() icons: Item[] = ICONS; // lista de iconos para mostrar
  @Input() passwordIcons: Item[] = []; // iconos para la contraseña

  constructor() { }

  ngOnInit(): void { }

  // cuando se cliquea sobre un icono se hace el llamado a este metodo
  itemSelected(item: Item) {
    // si ya hay 3 iconos seleccionados no se puede hacer nada mas
    if (this.passwordIcons.length === 3) {
      return;
    }
    // le pregunta al usuario si está seguro de agregar el icono
    confirmAdd().then((result) => {
      if (result.isConfirmed) {
        // si el usuario lo confirma, lo agrega a la lista de iconos para contraseña
        this.passwordIcons.push(item);
      }
    });
  }
}
