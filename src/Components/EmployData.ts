import { IEmployee } from "../types/Employee.type";

export const EmpData: IEmployee[] = [
  {
    id: new Date().toJSON().toString(),
    firstName: "Mark",
    lastName: "David",
    number: "9952555542",
    email: "dummy321@gmail.com",
  }
  // {
  //   id: new Date().toJSON().toString(),
  //   firstName: "Yasmin",
  //   lastName: "Praveen",
  //   email: "dummy321@gmail.com",
  //   number: "99525 55542",
  // },
  // {
  //   id: new Date().toJSON().toString(),
  //   firstName: "Nasim",
  //   lastName: "Ansari",
  //   number: "99525 55542",
  //   email: "dummy321@gmail.com",
  // },
  // {
  //   id: new Date().toJSON().toString(),
  //   firstName: "Imran",
  //   lastName: "Mansoori",
  //   number: "99525 55542",
  //   email: "dummy321@gmail.com",
  // },
  // {
  //   id: new Date().toJSON().toString(),
  //   firstName: "Gulshan",
  //   lastName: "Khatun",
  //   number: "99525 55542",
  //   email: "dummy321@gmail.com",
  // },
];
