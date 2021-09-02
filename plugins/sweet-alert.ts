import Swal from 'sweetalert2';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default ({app}: any, inject: any): any => {
  inject('swal', Swal);
};
