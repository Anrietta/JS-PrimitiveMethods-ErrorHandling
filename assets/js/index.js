// УВАГА! СТУДЕНТИ, ЯКІ НАВЧАЮТЬСЯ ЗА ЮТУБОМ МЕНТОРА РОМАНА, ІНФОРМАЦІЯ ДЛЯ ВАС! =)
// Вам не потрібно виконувати 6 завдання (із зірочкою). Завдання на try..catch будуть трохи далі =)

// 1. Даний рядок тексту. Вивести його задом наперед

// const str = 'I are baboon';
// let reversedStr = '';

// for (const char of str) {
//     reversedStr = char + reversedStr;
// }
// console.log(reversedStr);



// const str = 'I are baboon';
// const reversedStr = str.split('').reverse().join('');
// console.log(reversedStr);





// 2. Написати функцію, яка приймає число з дрібною частиною і повертає тільки цілу частину


// function numToInt(n) {
//     if (typeof n !== 'number') {
//         throw new TypeError (`${n} is not a number!`)
//     }

//     return Math.floor(n)
// }

// try {
//     console.log(numToInt(3.14));
//     console.log(numToInt('3.14'));
// } catch (e) {
//     console.log(e);
// }






// 3. Прийняти від користувача (за допомогою prompt) його ім’я і вивести його у модальне вікно великими літерами (‘alex’ -> ‘ALEX’)


// const userName = prompt('Enter your name');
// alert(userName.toUpperCase());



// const userName = prompt('Enter your name');

// function userNameToUpperCase(name) {
//     return alert(name.toUpperCase());
// }

// console.log(userNameToUpperCase(userName));



// 4. Написати функцію, яка приймає рядок тексту з датою у форматі “2021-22-09” і повертає її у вигляді “22.09.2021”

// function dateArrange(date) {
//     let dateArr = date.split('-');
//     dateArr.push(dateArr[0]);
//     dateArr.splice(0, 1)
//     let dateArr2 = dateArr.join('.');
//     console.log(dateArr2);
// }

// dateArrange('2021-22-09')


// function dateArrange(date) {
//     if (typeof date !== 'string') {
//         throw new TypeError (`Wrong date format`);
//     }
//     if (typeof date === 'string' && date.includes('/')) {
//         throw new TypeError ('Change separators to dots');
//     }
//     const yearNewDate = date.slice(0, 4)
//     const newDate = (date.slice(5) + '.' + yearNewDate).replaceAll('-', '.');
//     return newDate;

// }

// try {
//     console.log(dateArrange('2021-22-09'));
//     console.log(dateArrange('2021/22/09'));
//     console.log(dateArrange(2021/22/09));
//     console.log(dateArrange(true));
// } catch (err) {
//     console.log(err);
// }

// console.log('Hello');




// /**
//  * Formats the date from YYYY-DD-MM to DD.MM.YYYY also changing the punctuation mark
//  * @param {string} date  - date in format YYYY-DD-MM
//  * @throws - error if the date parts doesn't equals 3
//  * @returns formated date DD.MM.YYYY
//  */


// function dateArrange(date) {
//     const dateParts = date.split('-');

//     if (dateParts.length !== 3) {
//         throw new RangeError (`Wrong date format`);
//     }

//     const year = dateParts[0];
//     const day = dateParts[1];
//     const month = dateParts[2];

//     return `${day}.${month}.${year}`;

// }

// try {
//     console.log(dateArrange('2021-22-09'));
//     console.log(dateArrange('2021/22/09'));
// } catch (err) {
//     console.log(err);
// }



// 5. Написати функцію, яка приймає два рядки, написані у різному регістрі та порівнює їх незалежно від регістру.
// isEqual(‘pApA’, ‘papa’)  //true
// isEqual(‘qwerty’, ‘QWErty’)  //true
// isEqual(‘aaa’, ‘EEE’) //false 



// function isEqual(str1, str2) {
//     if (typeof str1 === 'string' && typeof str2 === 'string') {
//         return str1.toLowerCase() === str2.toLowerCase();
//     }
//     return `${str1} or ${str2} is not a string`
// }

// console.log(isEqual('pApA', 'papa'));
// console.log(isEqual('qwerty', 'QWErtY'));
// console.log(isEqual('aaa', 'ppp'));
// console.log(isEqual('12a', '12A'));
// console.log(isEqual(55, '55'));



// *6. Написати функцію, яка викидає помилку під час роботи і перевірити роботу функції, викликавши її у блоці try-catch



// function isPositiveNumber(n) {
//     if (typeof n !== 'number') {
//         throw new TypeError (`${n} is not a number`);
//     }
//     if (n < 0) {
//         throw new RangeError (`${n} is not a positive number`);
//     }
//     return `${n} is a positive number`;
    
// }

// try{
//     console.log(isPositiveNumber(5));
//     console.log(isPositiveNumber(-56));
//     console.log(isPositiveNumber('boooo'));
//     console.log(isPositiveNumber(true));
// } catch (e) {
//     console.log(e);
// }

// console.log('hello');