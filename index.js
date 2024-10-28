//task1
// const nearto100 = (a,b,c) => {
//     const distA = Math.abs(100-a);
//     const distB = Math.abs(100-b);
//     const distC = Math.abs(100-c);

//     if(distA<=distB && distA<=distC){
//         return a;
//     }
//     else if(distB<=distA && distB<=distC){
//         return b;
//     }
//     else return c;
// };

// console.log(nearto100(99,1,105));


// task2
// const alphabetorder = (str) => str
//   .split(' ')  // Разбиваем строку на слова
//   .map(word => word.split('').sort((a, b) => a > b ? 1 : -1).join(''))  // Сортируем буквы в каждом слове
//   .join(' ');  // Соединяем слова обратно в строку

// console.log(alphabetorder('My name is Alisher'));


// task3
// const nonrepeat = (str) => str
// .split('')
// .filter((item, index, arr) => arr.filter(arrItem => arrItem === item).length === 1)
// .join('');

// function findNonRepeats(){
//     const inpnotrepeat = document.getElementById('inp-notrepeat').value;
//     const result = nonrepeat(inpnotrepeat)
//     document.getElementById('result').textContent = `Unique characters: ${result}`;
// }

// task4
// const moveChars = (str) =>
// str.split('')
// .map(char=> String.fromCharCode(char.charCodeAt
// (0)+1))
// .join('');

// function showMovedChars(){
//     const inpmovedchars = document.getElementById('inp-movedchars').value;
//     const result = moveChars(inpmovedchars);
//     alert(`Modified text: ${result}`);
// }

// task 5
// function longest_string(str_ara) {
//     let max = str_ara[0].length;
//     str_ara.map(v => max = Math.max(max, v.length));
//     let result = str_ara.filter(v => v.length == max);
//     return result[0]; // Возвращаем первое найденное длинное слово
//   }



// function shortest_string(str_ara) {
//     let min = str_ara[0].length;
//     str_ara.map(v => min = Math.min(min, v.length));
//     let result = str_ara.filter(v => v.length == min);
//     return result[0]; // Возвращаем первое найденное короткое слово
//   }

//   // Основная функция для обработки ввода
//   function findLongestAndShortest() {
//     // Получаем три слова через prompt
//     let word1 = prompt("Enter the first word:");
//     let word2 = prompt("Enter the second word:");
//     let word3 = prompt("Enter the third word:");

//     // Создаём массив из этих слов
//     let words = [word1, word2, word3];

//     // Находим самое длинное и самое короткое слова
//     let longest = longest_string(words);
//     let shortest = shortest_string(words);

//     // Выводим результат через alert
//     alert(`The longest is: ${longest}`);
//     alert(`The shortest is: ${shortest}`);
//   }

//   findLongestAndShortest();

// task6
// const paragraph = document.querySelector('#p');  

// paragraph.innerHTML = paragraph.innerText
//   .split(' ')  
//   .map(word => {
//     if (word.length > 7) {
//       return `<span style="background-color:blue">${word}</span>`;
//     } else if (word.length < 3) {
//       return `<span style="font-weight: bold">${word}</span>`;
//     } else {
//       return word;
//     }
//   })
//   .join(' '); 

// task7
// const paragraph = document.querySelector('#p');
// paragraph.innerHTML = paragraph.innerHTML
//     .replace(/\?/g, '*')
//     .replace(/!/g, '@')

// task8
// let paragraph = document.getElementById("paragraph");
// paragraph.innerHTML = paragraph.innerHTML
//     .split(/([.!?])\s+/)
//     .map((sentence, i, arr) => i % 2 === 0 ? sentence + (arr[i + 1] || '') : '')
//     .filter(Boolean)
//     .join('.</p><p>') + '</p>'

// task9
// let paragraph = document.getElementById("paragraph");
// const wordCount = paragraph.innerHTML.split(' ').length;
// alert(`${wordCount} words`);

// task10
// let paragraph = document.getElementById("paragraph");
//         paragraph.innerHTML = paragraph.innerHTML.split(' ').map(word => {
//             if (/^a/i.test(word)) {
//                 // Оборачиваем слова, начинающиеся с "a", в <i> для курсива
//                 return `<i>${word}</i>`;
//             } else if (/y\b/i.test(word)) {
//                 // Оборачиваем слова, заканчивающиеся на "y", в <u> для подчеркивания
//                 return `<u>${word}</u>`;
//             } 
//             return word;
//         }).join(' ');

