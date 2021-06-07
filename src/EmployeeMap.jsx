import React from 'react'

const EmployeeMap = (props) => {
    const {name, id} = props;
    return (
        <div>
            <h6>{`Name : ${name} Employee ID : ${id}`}</h6>
        </div>
    )
};

export default EmployeeMap;