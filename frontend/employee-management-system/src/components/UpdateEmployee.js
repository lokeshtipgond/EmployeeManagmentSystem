import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
const UpdateEmployee = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    id: id,
    firstName: "",
    lastName: "",
    emailId: "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployeeService.getEmployeeById(id);
        setEmployee(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const updateEmployee = (e) => {
    e.preventDefault();
    EmployeeService.updateEmployeeById(employee, id)
      .then((res) => {
        navigate("/employeeList");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex max-w-xl mx-auto shadow border-b my-3">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Update Employee</h1>
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
            onClick={updateEmployee}
            className="rounded text-white  font-semibold bg-green-400 hover:bg-green-700 py-2 px-6"
          >
            Update
          </button>
          <button
            onClick={() => navigate("/employeeList")}
            className="rounded text-white  font-semibold bg-red-400 hover:bg-red-700 py-2 px-6"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployee;
