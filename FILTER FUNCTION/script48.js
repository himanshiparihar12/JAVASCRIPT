// Get names of employees who are currently on notice period (notice period = 60 days)
const employees = [
  { name: "Neeraj", lastWorkingDay: "2025-08-20" },
  { name: "Vivek", lastWorkingDay: "2025-07-25" },
  { name: "Divya", lastWorkingDay: "2025-10-01" }
];

const onNotice = employees.filter(emp => {
    let today = new Date("2025-08-21"); 
    let noticePeriod = 1000 * 60 * 60 * 24 * 60;
    let lwd = new Date(emp.lastWorkingDay);
    let noticeStart = new Date(lwd.getTime() - noticePeriod);
    return today >= noticeStart && today < lwd;
  });

console.log(onNotice);