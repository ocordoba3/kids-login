import { COLORS } from 'src/consts';
import Swal from 'sweetalert2';

// TODOS LOS MENSAJES DE RETROALIMENTACION O INTEACION HACIA EL USUARIO

export const getUserName = () => {
    return Swal.fire({
        allowEscapeKey: false,
        allowOutsideClick: false,
        backdrop: `rgba(0,0,0,0.4)`,
        background: COLORS.dark,
        buttonsStyling: false,
        confirmButtonText: 'Lo confirmo',
        customClass: {
            confirmButton: 'confirmButton'
        },
        html: '<h1>Pon tu nombre de usuario <span class="far fa-laugh-beam"></span></h1>',
        input: 'text',
        preConfirm: (value) => {
            if (!value) {
                return false;
            } else {
                return value;
            }
        },
    });
}

export const confirmAdd = () => {
    return Swal.fire({
        buttonsStyling: false,
        background: COLORS.dark,
        cancelButtonText: 'No lo creo',
        customClass: {
            confirmButton: 'confirmButton',
            cancelButton: 'cancelButton'
        },
        confirmButtonText: 'Lo confirmo',
        html: '<h2>¿Estás seguro?</h2>',
        showCancelButton: true
    });
}

export const logginMessage = (title: string) => {
    return Swal.fire({
        backdrop: `rgba(0,0,0,0.4)`,
        background: COLORS.dark,
        buttonsStyling: false,
        confirmButtonText: 'Gracias!',
        customClass: {
            confirmButton: 'confirmButton'
        },
        html: '<h2>' + title + '</h2>'
    })
}
export const tryAgainMessage = () => {
    return Swal.fire({
        backdrop: `rgba(0,0,0,0.4)`,
        background: COLORS.dark,
        buttonsStyling: false,
        cancelButtonText: 'No lo creo',
        customClass: {
            confirmButton: 'confirmButton',
            cancelButton: 'cancelButton'
        },
        confirmButtonText: 'Lo confirmo',
        html: '<h2>Parece que no estás registrado</h2>' + 
        '<h4>¿Quieres volver a intentarlo?</h4>',
        showCancelButton: true
    })
}