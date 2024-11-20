// let arr = [1,2,3,4,5,6,7,8]
// arr.__proto__.addTotal = function() {
//     return this[6] - 1
// }
// console.log(arr.addTotal());


// let arr = [1,1,1,2,2,3,3,4,4,5,5,]
// let newArr = []
// function cutDuplicate(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         if(!newArr.includes(arr[i])) {
//             newArr.push(arr[i])
//         }
//     }
//     console.log(newArr);
// }
// cutDuplicate(arr)


// 1.
// let obj = {a: 1, b: 2, c: 3}
// let resObj = {}
// let n = 3
// function triple(obj) {
//    for(let key in obj) {
//     resObj[key] = obj[key] * n
//    }
//    console.log(resObj);
// }
// triple(obj)


// 2.
// function countWordsWithA(inputString) {
//     const words = inputString.split(/\s+/); 
//     let count = 0;
//     words.forEach(word => {
//         if (word.toLowerCase().includes('a')) {
//             count++;
//         }
//     });
//     return count;
// }
// const string = "Salom dunyo! Bugun juda yaxshi kun.";
// const result = countWordsWithA(string);
// console.log(`A harfi ishtirok etgan so'zlar soni: ${result}`);


// 3.
// const books = [
//     { title: "Halqa", author: "Akrom Malik", read: false },
//     { title: "Dunyoning ishlari", author: "O'tkir Hoshimov", read: true },
//     { title: "Iymon", author: "Shayx Muhammad Sodiq Muhammad Yusuf", read: true }
//   ];
  
//   books.forEach(book => {
//     if (book.read) {
//       console.log(`${book.author} "${book.title}" kitobi o'qilgan`);
//     } else {
//       console.log(`${book.author} "${book.title}" kitobi o'qilmagan`);
//     }
//   })


// 4.
// function createObjectFromArray(strings) {
//     const result = {}; 
//     strings.forEach(string => {
//         result[string] = string.length; 
//     });
//     return result;
// }
// const input = ["text", "world", "laptop"];
// const output = createObjectFromArray(input);
// console.log(output);


// 5.

// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// function countOccurrences(array) {
//     const result = {}; 
//     array.forEach(item => {
//         result[item] = (result[item] || 0) + 1;
//     });
//     return result;
// }
// const output = countOccurrences(animals);
// console.log(output)


// 6.
// const input = [
//     { name: 'John', age: 13 },
//     { name: 'Mark', age: 56 },
//     { name: 'Rachel', age: 45 },
//     { name: 'Nate', age: 67 },
//     { name: 'Jeniffer', age: 65 }
// ];
// const ages = input.map(person => person.age);
// const maxNum = Math.max(...ages);
// const minNum = Math.min(...ages);
// const result = maxNum - minNum;
// console.log(`Yosh orasidagi farq ${result}`);


// 7.
// function getTruthyFalsy(arr) {
//     return {
//         truthy: arr.filter(Boolean), 
//         falsy: arr.filter(item => !item) 
//     };
// }
// const input = [false, 1, 10, "", null, "sultonqul", 1.13, 0];
// const result = getTruthyFalsy(input);
// console.log(result);


// 8.
//?


// 9.
// ?


// 12.
// let arr = ["Salom", "Uzbekistan", "Hello", "World"];
// function findLastLength(str) {
//     const word = str.trim().split(" ");
//     return word[word.length - 1].length;
// }
// const result = findLastLength(arr.join(" "));
// console.log(result); 


// 13.
// let input = {a: 2, b: 5, c: 7}
// let result = Object.entries(input).map(([key, value]) => key + value);
// console.log(result);


// 14.
// let arr1 = [1,2]
// let arr2 = [3,4]
// var findMedianSortedArrays = function(nums1, nums2) {
//    let merged = [...nums1, ...nums2]
//    let total = 0
//    merged.forEach(value => {
//     total += value
//    })
//    let result = total / merged.length
//    console.log(result);
// };
// findMedianSortedArrays(arr1, arr2)


// 15.
// let arr = [1,1,1,2,2,3,3,4,4,5,5,]
// let newArr = []
// function cutDuplicate(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         if(!newArr.includes(arr[i])) {
//             newArr.push(arr[i])
//         }
//     }
//     console.log(newArr);
// }
// cutDuplicate(arr)