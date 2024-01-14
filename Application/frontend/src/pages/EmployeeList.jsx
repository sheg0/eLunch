import EmployeeList from "../components/EmployeeList/EmployeeList.jsx";
import { EmployeeListProvider } from "../context/EmployeeListContext.jsx";

const Employee = (finances) => {
  return (
    <EmployeeList>
      <EmployeeList finances={finances}></EmployeeList>
    </EmployeeList>
  );
};

export default Employee;
