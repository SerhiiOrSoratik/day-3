const birth1 = new Date(2000, 6, 20);
const birth2 = new Date(1991, 6, 11);
const birth3 = new Date(1997, 7, 17);
const birth4 = new Date(2000, 7, 8);
const birth5 = new Date(1993, 8, 15);
const birth6 = new Date(1996, 3, 2);

const EMPLOYEES_LIST = [
    {
        name: 'Ваня Иванов',
        birthday: birth1
    },
    {
        name: 'Петя Петров',
        birthday: birth2
    },
    {
        name: 'Костя Костянов',
        birthday: birth3
    },
    {
        name: 'Максим Максимов',
        birthday: birth4
    },
    {
        name: 'Коля Колевич',
        birthday: birth5
    },
    {
        name: 'Ибрагим Ибрагимович',
        birthday: birth6
    },
];

 const findHowOld = (employee) => {
    const nowDate = new Date;
    let diff = nowDate - employee.birthday;
    return Math.floor(diff / 31557600000);
}

const sortList = (employee) => {
    employee.sort(function (a, b) {
        return new Date(a.birthday) - new Date(b.birthday);
    });
}

 const formatDate = (date) => {
    const options = {month: 'long', year: 'numeric'};
    let formatDate = new Date(date).toLocaleString('ru-RU', options);
    return formatDate[0].toUpperCase() + formatDate.slice(1, -2);
}

const show = (employees, date, quantity) => {
    for(let i = 0; i < quantity; i++) {
    date.setMonth(date.getMonth() + 1);
    console.log(`${formatDate(date)}`);
    employees.forEach(employee => {
        if (employee.birthday.getMonth() === date.getMonth()) {
            console.log('(' + employee.birthday.getDate() + ') - ' + employee.name + employee.surname + ' (' + pl(findHowOld(employee)) + ')');
        }
    });
}
}

 const pl = (age) => {
    if (age !== 11 && age % 10 === 1) {
        return (age + ' ' + 'год')
    } else if (age % 10 >= 2 && age % 10 <= 4 && (age << 5 || age >> 21)) {
        return age + ' ' + 'года'
    } else if (age % 10 === 0 || (age >= 5 && age <= 20) || (age % 10 >= 5 && age % 10 <= 9)) {
        return age + ' ' + 'лет';
    }
}


const dialog = (text) => {
    let readline = require('readline-sync');
    return readline.question(text);
}

const menu = (employees, isOn) => {
    sortList(employees);
    console.log('_____________________________')
    let date = new Date;
    let variant = dialog('0 - 0 month, 1 - 1 month, 2 - 2 month ');
    while (isOn) {
        if (variant === '0') {
            date.setMonth(date.getMonth() - 1);
            show(employees, date, 1);
            variant = '';
            menu(employees, true);
        } else if (variant === '1') {
            date.setMonth(date.getMonth() - 1);
            show(employees, date, 2);
            variant = '';
            menu(employees, true);
        } else if (variant === '2') {
            date.setMonth(date.getMonth() - 1);
            show(employees, date, 3);
            variant = '';
            menu(employees, true);
        } else {
            isOn = false;
        }
    }
}

const readCsvFile = (path) => {
    const fs = require("fs");
    let fileContent = fs.readFileSync(path, 'utf-8');
    return parseDataFromCsvFile(fileContent);
}

const parseDataFromCsvFile = (fileContent) => {
    let employeesList = [];
    fileContent = fileContent.toString().split('\n');
    let headers = fileContent.shift().split(',');
    fileContent.map(elem => {
        let elementArray = elem.split(',');
        let tempEmployeeData = {};
        headers.map((header, index) => {
            tempEmployeeData[header.trim()] = elementArray[index];
        });
        employeesList.push(tempEmployeeData);
    });
    employeesList = correctDate(employeesList);
    return employeesList;
}

const correctDate = (employeesList) => {
    employeesList.map(employee => {
        employee.birthday = new Date(employee.birthday);
    })
    return employeesList;
}

menu(readCsvFile(process.argv[2]), true);





