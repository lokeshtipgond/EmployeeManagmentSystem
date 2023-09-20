import React, { useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    EmployeeService.saveEmployee(employee)
      .then((res) => {
        console.log(res);
        navigate("/employeeList");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const reset = (e) => {
    e.preventDefault();

    setEmployee({ id: "", firstName: "", lastName: "", emailId: "" });
  };
  return (
    <div className="flex max-w-xl mx-auto shadow border-b my-3">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add New Employee</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block">First Name</label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={(e) => handleChange(e)}
            className="w-96 border mt-2 px-2 py-2"
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={(e) => handleChange(e)}
            className="w-96 border mt-2 px-2 py-2"
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block">Email</label>
          <input
            type="email"
            name="emailId"
            value={employee.emailId}
            onChange={(e) => handleChange(e)}
            className="w-96 border mt-2 px-2 py-2"
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-4 pt-4 space-x-4">
          <button
            onClick={saveEmployee}
            className="rounded text-white  font-semibold bg-green-400 hover:bg-green-700 py-2 px-6"
          >
            Save
          </button>
          <button
            onClick={reset}
            className="rounded text-white  font-semibold bg-red-400 hover:bg-red-700 py-2 px-6"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
