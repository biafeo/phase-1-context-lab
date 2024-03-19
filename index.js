/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map((e) => e.date);


    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}



const createEmployeeRecord = (employeeData) => {
    return {
        firstName: employeeData[0],
        familyName: employeeData[1],
        title: employeeData[2],
        payPerHour: employeeData[3],
        timeInEvents: [],
        timeOutEvents: [],

    }
}
const createEmployeeRecords = (employeesData) => {
   return employeesData.map((employeeData) => {
        return createEmployeeRecord(employeeData);
    })
};
function createTimeInEvent(date) {
    const dateParts= date.split(' ');
    this.timeInEvents.push({
        type: "TimeIn",
        hour: Number.parseInt(dateParts[1]),
        date: dateParts[0],

    });
    return this;
}

function createTimeOutEvent(date) {
    const dateParts= date.split(' ');
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: Number.parseInt(dateParts[1]),
        date: dateParts[0],

    });
    return this;
}
function hoursWorkedOnDate(date) {
    const timeInHour = this.timeInEvents.find((timeInEvent) => {
        return timeInEvent.date === date.split(' ')[0];
    }).hour;
    const timeOutHour = this.timeOutEvents.find((timeOutEvent) => {
        return timeOutEvent.date === date.split(' ')[0];
    }).hour;

    return (timeOutHour - timeInHour) / 100;
}
function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}
function findEmployeeByFirstName(employeeRecords, name) {
    return employeeRecords.find((record) => {
        return record.firstName === name;
    });
}

function calculatePayroll(employees) {
    let total = 0;
    for (const employee of employees) {
        total += allWagesFor.call(employee);
    }
    return total;
}












// const employeeObjects =[];
// for (const employeeData of employeesData){
//     const employeeObject = createEmployeeRecord(employeeData);
//     employeeObjects.push
// }


// const createTimeInEvent = function (dateStamp) {
//     let hour = parseInt(dateStamp.substring(dateStamp.length - 4));
//     let date = dateStamp.substring(0, dateStamp.length - 5);
//     let newEvent = {
//       type: "TimeIn",
//       hour: hour,
//       date: date,
//     };
  
//     this.timeInEvents.push(newEvent);
//     return this;
//   };