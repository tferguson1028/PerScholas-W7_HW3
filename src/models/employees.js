let avatars = [
  "/assets/avatars/avatar_1.png",
  "/assets/avatars/avatar_2.png",
  "/assets/avatars/avatar_3.png",
  "/assets/avatars/avatar_4.png",
  "/assets/avatars/avatar_5.png",
  "/assets/avatars/avatar_6.png",
  "/assets/avatars/avatar_7.png",
  "/assets/avatars/avatar_8.png",
  "/assets/avatars/avatar_9.png"
];

let officeAreaCode = randNumString(3);
let officePrefix = randNumString(3);

function randNumString(length)
{
  return String(Math.random().toFixed(length).slice(2, length+2));
}

function createEmployee(name, title, pictureSource, bgColor)
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
    backColor: bgColor,
    email: email,
    officeNumber: officeNumber,
    mobileNumber: mobileNumber,
    smsNumber: mobileNumber
  });
}

const employees = [
  createEmployee("James King", "President and CEO", avatars[5], "#d6415f"),
  createEmployee("Julie Taylor", "VP of Marketing", avatars[7], "#d98240"),
  createEmployee("Eugene Lee", "CFO", avatars[0], "#61c0b3"),
  createEmployee("John Williams", "VP of Engineering", avatars[3], "#1d9e41"),
  createEmployee("Ray Moore", "VP of Sales", avatars[4], "#dc9b41"),
  createEmployee("Paul Jones", "QA Manager", avatars[2], "#9c275e"),
];

module.exports = employees;
