import { useState } from "react";
import { IEmployee } from "../types/Employee.type";
import EmployeeModal from "./EmployeeModal";
import styles from "./Styles/EmployeeList.module.css";
interface EmployeeListProps {
  list: IEmployee[];
  onDeleteClickHnd: (data: IEmployee) => void;
  onEditEmployee: (data: IEmployee) => void;
}

const EmployeeList: React.FC<EmployeeListProps> = ({
  list,
  onDeleteClickHnd,
  onEditEmployee,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [dataToShow, setDataToShow] = useState<IEmployee | null>(null);

  // const listdata = list.map(item => console.log(`${item.id} ${item.firstName} ${item.lastName} ${item.number}`))
  const formatPhoneNumber = (number: string): string => {
    const firstPart = number.slice(0, 5);
    const secondPart = number.slice(5);
    return `${firstPart} ${secondPart}`;
  };

  const handleViewClick = (data: IEmployee) => {
    setDataToShow(data);
    setShowModal(true);
  };

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            <th className={styles.th}>Sno.</th>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Number</th>
            <th className={styles.th}>Email</th>
            <th className={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr
              className={styles.tr}
              key={`${item.id} ${item.firstName} ${item.lastName} ${item.number}`}
            >
              <td className={styles.td}>{index + 1}</td>
              <td
                className={styles.td}
              >{`${item.firstName} ${item.lastName}`}</td>
              {/* <td className={styles.td}>+91 {item.number}</td> */}
              <td className={styles.td}>
                +91 {formatPhoneNumber(item.number)}
              </td>
              <td className={styles.td}>{item.email}</td>
              <td className={styles.td}>
                <div>
                  <input
                    type="button"
                    value="View"
                    onClick={() => handleViewClick(item)}
                  />
                  <input
                    type="button"
                    value="Edit"
                    onClick={() => onEditEmployee(item)}
                  />
                  <input
                    type="button"
                    value="Delete"
                    onClick={() => onDeleteClickHnd(item)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && dataToShow !== null && (
        <EmployeeModal
          closeModal={() => setShowModal(false)}
          data={dataToShow}
        />
      )}
    </div>
  );
};

export default EmployeeList;
