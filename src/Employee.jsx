import React from 'react';

const Employee = (props) => {
    const {firstName, lastName, age} = props;
    return  (
        <div>
            <h5>Employee name : {firstName} {lastName} Who is age : {age}</h5>
        </div>
    )
};

export default Employee;