let officeAreaCode = randNumString(3);
let officePrefix = randNumString(3);
console.log(officeAreaCode);

function randNumString(length)
{
  return String(Math.random().toFixed(length).slice(2, length+2));
}

function createEmployee(name, title, pictureSource)
{
  let splitName = String(name).toLowerCase().split(' ', 2);
  splitName[0].trim();
  splitName[1].trim();

  let email = `${splitName[0].slice(0,1)}${splitName[1]}@fakeemail.com`;
  let officeNumber = `(${officeAreaCode}) ${officePrefix}-${randNumString(4)}`;
  let mobileNumber = `(${randNumString(3)}) ${randNumString(3)}-${randNumString(4)}`;
  return (
  {
    name: name,
    title: title,
    profile: pictureSource,
    email: email,
    officeNumber: officeNumber,
    mobileNumber: mobileNumber,
    smsNumber: mobileNumber
  });
}

const employees = [
  createEmployee("James King", "President and CEO", "#"),
  createEmployee("Julie Taylor", "VP of Marketing", "#"),
  createEmployee("Eugene Lee", "CFO", "#"),
  createEmployee("John Williams", "VP of Engineering", "#"),
  createEmployee("Ray Moore", "VP of Sales", "#"),
  createEmployee("Paul Jones", "QA Manager", "#"),
];

console.log(employees);

module.exports = employees;
