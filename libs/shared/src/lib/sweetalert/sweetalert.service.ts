/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetalertService {

   
  constructor(private router: Router) { }

  deleteBtn(deleteFn: () => Promise<any>) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'me-2 btn btn-danger'
      },
      buttonsStyling: false
    });
    
    swalWithBootstrapButtons.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '¡Sí, elimínalo!',
      cancelButtonText: '¡No, cancélalo!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        deleteFn().then(() => {
          swalWithBootstrapButtons.fire(
            '¡Eliminado!',
            'Tu archivo ha sido eliminado.',
            'success'
          ).then(() => {
            location.reload();
          });
        }).catch(() => {
          swalWithBootstrapButtons.fire(
            'Error',
            'Hubo un problema al eliminar el archivo.',
            'error'
          );
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Tu archivo está a salvo :)',
          'error'
        );
      }
    });
  }
}
