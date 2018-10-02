export class Empleado {

  //propiedades

  name: string
  lastname: string
  adress: string
  department: string
  picture: string

  constructor(pName, pLastname, pAdress, pDepartment, pPicture) {

    this.name = pName
    this.lastname = pLastname
    this.adress = pAdress
    this.department = pDepartment
    this.picture = pPicture
  }
}

