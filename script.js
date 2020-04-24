console.log('Задание 1');
 
let str = 'aaa@bbb@ccc';

console.log(str.replace(/@/g, '!'));

console.log();
console.log('Задание 2');

let date = '2025-12-31';
let date2 = date.replace(/(2025)(-)(12)(-)(31)/, '$5$4$3$2$1');

console.log(date2.replace(/-/g, '/'));
 

console.log();
console.log('Задание 3');

let str1 = 'я учу javascript!';

console.log(str1.substr(2, 3), str1.substr(6, 10));
console.log(str1.substring(2, 5), str1.substring(6, 16));
console.log(str1.slice(2, 5), str1.slice(6, 16));


console.log();
console.log('Задание 4');

let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;

for (i = 0; i < arr.length; i++) {
    let n = Math.pow(arr[i], 3);
    sum = sum + n;
}
console.log(Math.sqrt(sum));


console.log();
console.log('Задание 5');

function getValue (a, b){
    c = Math.abs(a - b);
}
getValue(3, 5);
console.log(c);

getValue(6, 1);
console.log(c);


console.log();
console.log('Задание 6');

function getTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let dat = date.getDate();
    let mont = date.getMonth() + 1;
    let year = date.getFullYear();

    if(hour < 10) {
        hour = '0' + hour;  
        }
    if(min < 10) {
        min = '0' + min;  
        }
    if(sec < 10) {
        sec = '0' + sec;  
        }
    if( dat < 10) {
        dat = '0' + dat;
        }
    if(mont < 10) {
        mont = '0' + mont;  
        }

    console.log(hour + ':' + min + ':' + sec +' '+ dat + '.' + mont  + '.' + year);    
}
getTime();


console.log();
console.log('Задание 7');

let str2 = 'aa aba abba abbba abca abea';
let str3 = str2.match(/a{1}b+a{1}/g);

console.log(String(str3));


console.log();
console.log('Задание 8');

function chekPhon (phon) {

    phonVal = /^\+[\d]{3} [\d]{2} [\d]{7}$/;
    return phonVal.test(phon);
}
console.log(chekPhon('+375 29 3489229'));


function chekPhon1 (phon) {

    phonVal = /^\+[8][\d]{10}$/;
    return phonVal.test(phon);
}
console.log(chekPhon1('+80293489229'));


function chekPhon3 (phon) {

    phonVal = /^[\d\-]{7,15}$/;
    return phonVal.test(phon);
}
console.log(chekPhon3('348-92-29'));


console.log();
console.log('Задание 9');

function getUrl (str) {
    
    str1 = str.substring(0,8);      //вырезаем https://
    str1_1 = str.substring(8,);     //вырезаем оставшуюся часть
    a = str1_1.indexOf('/');        //находим индекс первого /
    b = str1_1.indexOf('?');        
    c = str1_1.indexOf('#');
    str2 = str1_1.substring(0,a);    // вырезаем строку до /
    if(b == -1){                      //проверяем наличие ? в строке 
        str3 = str1_1.substring(a,)  
    }
       else{
         str3 = str1_1.substring(a,b);
        }
    str4 = str1_1.substring(b+1,c);   // от ? до #
       
    str5 = str1_1.substring(c,);
    
    strArr = [str1+str2];
    strArr.push(str3);
    
    if(b != -1 && c != -1) {
        strArr.push(str4);
        strArr.push(str5);
    }
    return strArr;
}
console.log(getUrl('https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3'));
    


console.log();
console.log('Задание 10');

function getReply (strRep) {
    strRep = strRep.replace(/@+/g,' ');
    strRep = strRep.replace(/&+/g,' '); 
    strRep = strRep.replace(/#+/g,' ');
    strRep = strRep.replace(/\$+/g,' ');      
    strRep = strRep.replace(/\*+/g,' ');   // замена спецсимволов на пробелы
    strRep = strRep.replace(/\s+/g,' ');   // удаление лишний пробелов >1

    let arrRep = strRep.split(' ');
    let arrRep2 = [];
    
    for (let a; arrRep.length != 0;) {
        a = arrRep.shift(); // присваиваем а, вырезанный первый элемент массива
        
            for (let i = 0; i < arrRep.length; i++) {
                let b = arrRep.indexOf(a); //ищем индекс совпадения
                if(b != -1) {
                    arrRep.splice(b,1); //вырезаем совпадение
                    
                }
            }
            arrRep2.push(a); // добавляем проверенный элемент в нов.массив
            
    }
    return arrRep2;
}
console.log(getReply ('hello dark world & @ yello # dark $ hello late @ yello dark @@ hello  yello world world hello world dark gcvjg'));
