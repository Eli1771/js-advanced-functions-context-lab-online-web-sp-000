/* Your Code Here */

function createEmployeeRecord(emp) {
  let employeeRecord = {
    firstName: emp[0],
    familyName: emp[1], 
    title: emp[2], 
    payPerHour: emp[3],
    timeInEvents: [],
    timeOutEvents: []
  };
  
  return employeeRecord;
}

function createEmployeeRecords(empArray) {
  let employeeRecords = []
  for (let i = 0; i < empArray.length; i++) {
    let emp = empArray[i];
    employeeRecords.push(createEmployeeRecord(emp));
  }
  return employeeRecords;
}

function createTimeInEvent(dateTime) {
  let date = dateTime.split(' ')[0];
  let hour = parseInt(dateTime.split(' ')[1]);
  let punch = {
    type: 'TimeIn', 
    hour: hour, 
    date: date
  };
  this.timeInEvents.push(punch);
  return this;
}

function createTimeOutEvent(dateTime) {
  let date = dateTime.split(' ')[0];
  let hour = parseInt(dateTime.split(' ')[1]);
  let punch = {
    type: 'TimeOut', 
    hour: hour, 
    date: date
  };
  this.timeOutEvents.push(punch);
  return this;
}


//OLD COPIES

function hoursWorkedOnDate(date) {
  let startTime = parseInt(this.timeInEvents.find(punch => punch.date === date).hour)/100;
  let endTime = parseInt(this.timeOutEvents.find(punch => punch.date === date).hour)/100;
  return endTime - startTime;
}

// function wagesEarnedOnDate(emp, date) {
//   let hours = hoursWorkedOnDate(emp, date);
//   return emp.payPerHour * hours;
// }

// function allWagesFor(emp) {
//   let dates = emp.timeInEvents.map(t => t.date);
//   return dates.reduce((r, date) => {return r + wagesEarnedOnDate(emp, date)}, 0);
// }

// function findEmployeeByFirstName(empRecords, name) {
//   return empRecords.find(emp => emp.firstName === name);
// }

// function calculatePayroll(empRecords) {
//   return empRecords.reduce((total, emp) => {return total + allWagesFor(emp)}, 0);
// }

//OLD COPIES














/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}