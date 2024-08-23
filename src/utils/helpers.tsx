const swal = require("sweetalert");

const showSwal = (title:string, icon:string, buttons:string[] | string) => {
  swal({ title, icon, buttons });
};

export { showSwal };
