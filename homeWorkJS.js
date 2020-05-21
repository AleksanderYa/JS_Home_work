/* 1. Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
    вывод fizz вместо чисел, кратных 3;
вывод buzz вместо чисел, кратных 5;
вывод fizzbuzz вместо чисел, кратных как 3, так и 5. */

// function output(num) {
//     if (num % 5 === 0 && num % 3 === 0) {
//         console.log('fizzbuzz');
//     } else if (num % 5 === 0) {
//         console.log('buzz');
//     } else  if (num % 3 === 0) {
//     console.log('fizz');
//     } else {
//         console.log(num);
//     }
// }
//
// output(1);
// output(3);
// output(5);
// output(15);



// 2. Напишите скрипт, который используя оператор while выведет все числа от 45 до 670, кратные 10.
//
// var start = 45;
// while (true) {
//     if (start === 670) {
//         break;
//     }else if (start%10 === 0) {
//         console.log(start);
//         start += 1;
//     } else {
//         start += 1;
//     }
// }

// 3. Напишите скрипт, который используя оператор while выведет все числа от 45 до 67.
//
// var start = 45;
// while (true) {
//     if (start === 68) {
//         break;
//     }else {
//         console.log(start);
//         start += 1;
//     }
// }

// 4. Напишите скрипт, который используя оператор for выполнит два предыдущих задания.
//
// var startNumber;
// for (startNumber = 45; startNumber <= 68; startNumber += 1) {
//     console.log(startNumber);
// }
//
// var startNumberNext;
// for (startNumberNext = 45; startNumberNext <= 670; startNumberNext += 1) {
//     if (startNumberNext % 10 === 0) {
//         console.log(startNumberNext);
//     }
// }


/* 5. Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
    Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
Напишите код, который выводит все простые числа из интервала от 2 до n.
    Для n = 10 результат должен быть 2,3,5,7.
P.S. Код также должен легко модифицироваться для любых других интервалов. (используйте функции) */
//
//
// function natural(finish, start=2) {
//     var i = start;
//     // console.log(i);
//     for (i; i <= finish; i++) {
//         // console.log(i);
//         if ((i === 2 || i % 2 !== 0) &&
//             (i === 3 || i % 3 !== 0)) {
//             console.log(i)
//         }
//     }
// }
// natural(10);
// natural(100, 20);


// 6. Первая задача на Freecodecamp - Convert Celsius to Fahrenheit (раздел Basic Algorithm Scripting)

// 7. Вторая задача на Freecodecamp - Reverse a String (раздел Basic Algorithm Scripting)

// 8. Седьмая задача на Freecodecamp - Repeat a String Repeat a String (раздел Basic Algorithm Scripting)

// 9. Создайте массив arr с числовыми величинами 45,78,10,3. Добавьте в массив arr еще одно число. Посчитайте в переменную sum сумму чисел в нем, при помощи цикла for/while.


// // 10.Дан объект
// var salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// // Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
// var inside;
// var allCashForPeople = 0;
// for (inside in salaries) {
//     allCashForPeople += salaries[inside];
// }
// console.log(allCashForPeople);


// 11. Дан массив [1, 2, [3, 4, [5, 6]]]; Напишите функцию, которая будет рекурсивно выравнивать массив, где результатом будет [1, 2, 3, 4, 5, 6]. Также найдите метод массива, который уже это делает и разберитесь самостоятельно как это работает.

// 12. Дан массив [1, 2, 3, 4, 5, 6]. Найдите сумму чисел рекурсивно.

// 13. Freecodecamp - Factorialize a Number, Find the Longest Word in a String, Return Largest Numbers in Arrays, Confirm the Ending. Постарайтесь решить задачи императивно и декларативно, где это возможно.

// 14. Функция haveFun принимает 2 параметра: анонимную функцию, которая возвращает 3 и анонимную функцию, которая возвращает 4. Верните результатом функции haveFun сумму 3 и 4.












