import React from 'react';

const Employee = (props) => {
    const {name, id, company, role} = props;
    return  (
        <div>
            <h5>Employee Name : {name} ID : {id}</h5>
            <h5>Role : {role} Company : {company}</h5>
        </div>
    )
};

export default Employee;