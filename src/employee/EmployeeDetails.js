import React from "react";
import { useLocation } from 'react-router-dom';

function EmployeeDetails() {
    const location = useLocation();
    
    console.log("location - ", location.state);
    return (
      <div>
        <h1>Employee name is { location.state.empName }.</h1>
      </div>
    );
}

export default EmployeeDetails;
