import { useState } from "react";
import { IEmployee } from "../types/Employee.type";
import styles from "./Styles/EditEmployeeData.module.css";

interface EditEmployeeDataProps {
  data: IEmployee;
  onBackBtnClickHnd: () => void;
  onUpdateClickHnd: (data: IEmployee) => void;
}

const EditEmployeeData: React.FC<EditEmployeeDataProps> = ({
  data,
  onBackBtnClickHnd,
  onUpdateClickHnd,
}) => {
  const [firstName, setFirstName] = useState<string>(data.firstName);
  const [lastName, setLastName] = useState<string>(data.lastName);
  const [number, setNumber] = useState<string>(data.number);
  const [email, setEmail] = useState<string>(data.email);

  const onSubmitBtnClickHnd = (event: React.FormEvent) => {
    event.preventDefault();
    const updatedData: IEmployee = {
      id: data.id,
      firstName: firstName,
      lastName: lastName,
      number: number,
      email: email,
    };
    onUpdateClickHnd(updatedData);
    onBackBtnClickHnd();
    console.log("called update function");
  };
  return (
    <div className={styles.form_container}>
      <h3>Edit Employee</h3>
      <form>
        {/* <form onClick={onSubmitBtnClickHnd}> */}
        <div>
          <label>First Name : </label>
          <input
            type="text"
            placeholder="Rahul"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>
        <div>
          <label>Last Name : </label>
          <input
            type="text"
            placeholder="Kumar"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
        <div>
          <label>Number : </label>
          <input
            type="number"
            placeholder="99999 99999"
            value={number}
            onChange={(event) => setNumber(event.target.value)}
          />
        </div>
        <div>
          <label>E-mail : </label>
          <input
            type="text"
            placeholder="rahul123@gmail.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <input type="button" value="Back" onClick={onBackBtnClickHnd} />
          <input
            type="submit"
            value="Update Employee"
            onClick={onSubmitBtnClickHnd}
          />
        </div>
      </form>
    </div>
  );
};

export default EditEmployeeData;
