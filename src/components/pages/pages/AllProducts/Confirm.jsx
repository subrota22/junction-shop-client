import Swal from 'sweetalert2';
const Confirm = () => {
   const swalWithBootstrapButtons = Swal.mixin({
       customClass: {
         confirmButton: 'btn btn-success mx-2',
         cancelButton: 'btn btn-danger mx-2'
       },
       buttonsStyling: false
     })
     
     swalWithBootstrapButtons.fire({
       title: 'Are you sure?',
       text: "You won't be able to revert this!",
       icon: 'warning',
       showCancelButton: true,
       confirmButtonText: 'Yes, delete it!',
       cancelButtonText: 'No, cancel!',
       reverseButtons: true
     }).then((result) => {
       if (result.isConfirmed) {
        //
       } else if (
         /* Read more about handling dismissals below */
         result.dismiss === Swal.DismissReason.cancel
       ) {
         swalWithBootstrapButtons.fire(
           'Cancelled',
           'Your imaginary file is safe :)',
           'error'
         );
       }
     })
}

export default Confirm;