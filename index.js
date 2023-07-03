// Write your solution in this file!
const employee = {name:"Jane",streetAddress:"Nairobi"}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObject = {...employee};
    newObject[key] = value;
    return newObject;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    const newDeleteObject = {...employee};
    delete newDeleteObject[key]
    return newDeleteObject;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee;
}
