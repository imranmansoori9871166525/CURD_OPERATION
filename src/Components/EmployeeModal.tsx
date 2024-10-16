import { IEmployee } from "../types/Employee.type";
import styles from "./Styles/EmployeeModal.module.css";

interface EmployeeModalProps {
  closeModal: () => void;
  data: IEmployee;
}

const EmployeeModal: React.FC<EmployeeModalProps> = ({ closeModal, data }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <span className={styles.close} onClick={closeModal}>
          &times;
        </span>
        <div>
          <h3>Employee Data</h3>
          <div>
            {/* <div>
              <label>Id : {data.id}</label>
            </div> */}
            <div>
              <label>First Name : {data.firstName}</label>
            </div>
            <div>
              <label>Last Name : {data.lastName}</label>
            </div>
            <div>
              <label>Number : {data.number}</label>
            </div>
            <div>
              <label>E-mail : {data.email}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeModal;
