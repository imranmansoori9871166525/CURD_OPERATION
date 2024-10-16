import { useEffect, useState } from "react";
import { IEmployee, PageEnum } from "../types/Employee.type";
// import { EmpData } from "./EmployData";
import styles from "./Styles/Table.module.css";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
import EditEmployeeData from "./EditEmployeeData";

const Table: React.FC = () => {
  const [employeeList, setEmployeeList] = useState<IEmployee[]>([]);
  const [showpage, setShowpage] = useState<PageEnum>(PageEnum.list);
  const [dataToEdit, setDataToEdit] = useState<null | IEmployee>(null);
  // const [dataToEdit, setDataToEdit] = useState({} as IEmployee);
  useEffect(() => {
    const listnStr = window.localStorage.getItem("EmployeeList");
    if (listnStr) {
      _setEmployeeListStorageLocally(JSON.parse(listnStr));
    }
  }, []);

  const _setEmployeeListStorageLocally = (list: IEmployee[]) => {
    setEmployeeList(list);
    window.localStorage.setItem("EmployeeList", JSON.stringify(list));
  };

  const addEmployeeHnd = (data: IEmployee) => {
    _setEmployeeListStorageLocally([...employeeList, data]);
  };

  const deleteClickHnd = (data: IEmployee) => {
    const updatedList = employeeList.filter(
      (employee) => employee.id !== data.id
    );
    _setEmployeeListStorageLocally(updatedList);

    // second methon for delete index
    // const indexToDelete = employeeList.indexOf(data);
    // const tempList = [...employeeList];

    // tempList.splice(indexToDelete,1);
    // _setEmployeeListStorageLocally(tempList)
  };

  const onEditEmployeeData = (data: IEmployee) => {
    setShowpage(PageEnum.edit);
    setDataToEdit(data);
  };

  const updateData = (data: IEmployee) => {
    const updatedList = employeeList.map((employee) =>
      employee.id === data.id ? data : employee
    );
    _setEmployeeListStorageLocally(updatedList);
  };

  console.log("DataToEdit = " , dataToEdit)
  return (
    <section className={styles.section_content}>
      {showpage === PageEnum.list && (
        <div>
          <article>
            <h3 className={styles.header_text}>Employee List</h3>
          </article>
          <input
            type="button"
            value="Add"
            onClick={() => setShowpage(PageEnum.add)}
            className={styles.add_employee_btn}
          />
          <EmployeeList
            list={employeeList}
            onDeleteClickHnd={deleteClickHnd}
            onEditEmployee={onEditEmployeeData}
          />
        </div>
      )}

      {showpage === PageEnum.add && (
        <>
          {/* <input type="button" value="Back" onClick={() => setShowpage(PageEnum.list)} /> */}
          <AddEmployee
            onBackBtnClickHnd={() => setShowpage(PageEnum.list)}
            onSubmitClickHnd={addEmployeeHnd}
          />
        </>
      )}

      {showpage === PageEnum.edit && dataToEdit !== null && (
        <EditEmployeeData
          data={dataToEdit}
          onBackBtnClickHnd={() => setShowpage(PageEnum.list)}
          onUpdateClickHnd={updateData}
        />
      )}
      {/* {showpage === PageEnum.edit && dataToEdit !== null && <EditEmployeeData data={dataToEdit} onBackBtnClickHnd={() => setShowpage(PageEnum.list)} onUpdateClickHnd={updateData} />} */}
    </section>
  );
};

export default Table;
