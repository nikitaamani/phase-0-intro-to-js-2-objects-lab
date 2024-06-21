// Write your solution in this file!
let employee = {
    name: 'Nikita',
    role: 'Deejay',
    age: 20
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {

    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    
    let clonedEmployee = { ...employee};
    
    delete clonedEmployee[key];
    return clonedEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    
    delete employee[key];
    return employee;
}