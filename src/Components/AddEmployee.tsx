import React, { useState } from "react";
import styles from "./Styles/AddEmployee.module.css";
import { IEmployee } from "../types/Employee.type";

interface AddMemberProps {
  onBackBtnClickHnd: () => void;
  onSubmitClickHnd: (data: IEmployee) => void;
}

const AddEmployee: React.FC<AddMemberProps> = ({
  onBackBtnClickHnd,
  onSubmitClickHnd,
}) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const onSubmitBtnClickHnd = (event: React.FormEvent) => {
    event.preventDefault();
    const data: IEmployee = {
      id: new Date().toJSON().toString(),
      firstName: firstName,
      lastName: lastName,
      number: number,
      email: email,
    };
    onSubmitClickHnd(data);
    onBackBtnClickHnd();
    console.log("called add function");
  };

  return (
    <div className={styles.form_container}>
      <h3>Add Employee</h3>
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
            value="Add Employee"
            onClick={onSubmitBtnClickHnd}
          />
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
