import React from "react";
import { useParams, Routes, Route, useNavigate } from 'react-router-dom';
import EmployeeDetails from "./EmployeeDetails";

function EmployeeHome() {
    const { name } = useParams();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('details', { state: { empName: name }});
    }
    return (
        <div>
            <h1>EmployeeHome</h1>
            <p>Name: { name } </p>
            <button onClick={handleClick} >Check Details</button> 
            <Routes>
                <Route path="details" element={ <EmployeeDetails />} />
            </Routes>
        </div>
    );
}

export default EmployeeHome;
