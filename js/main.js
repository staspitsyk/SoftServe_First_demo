import {buildChessDesk} from './src/task1.js';
import {isEnvelopeFits} from './src/task2.js';
import {sortTriangles} from './src/task3.js';
import {findPalindrome} from './src/task4.js';
import {whichMethodWins} from './src/task5.js';
import {showRowOfSquares} from './src/task6.js';
import {showFibNumbers} from './src/task7.js';

document.querySelectorAll('.nav-link').forEach(item=>{
    item.addEventListener('click', e=>{
        e.preventDefault();
        let _this = e.target;
        $('.collapse').collapse('hide');
        $(_this.getAttribute('href')).collapse('show');
    });
});

//1 task
document.querySelector('#f0 button').addEventListener('click', e=>{
    e.preventDefault();
    let data = {};
    document.querySelectorAll('#f0 input').forEach(item=>{
        data[item.name] = item.value;
    });
    let result = buildChessDesk(Number(data.height), Number(data.width), data.char);
    if(result.reason){
        document.getElementById('0').innerHTML = `status: ${result.status} \nreason:${result.reason}`;
    }else{
        document.getElementById('0').innerHTML = result;
    }

});

//2 task
document.querySelector('#f1 button').addEventListener('click', e=>{
    e.preventDefault();
    let data = {};
    document.querySelectorAll('#f1 input').forEach(item=>{
        data[item.name] = Number(item.value);
    });
    let result = isEnvelopeFits({a: data.wOne, b: data.hOne}, {c: data.wTwo, d: data.hTwo});
    if(result.reason){
        document.getElementById('1').innerHTML = `status: ${result.status} \nreason:${result.reason}`;
    }else{
        document.getElementById('1').innerHTML = `Вложение возможно в конверт под номером: ${result}\n*Если номер конверта равен 0, вложение не возможно!`;
    }
});

//3 task
let dataTask3 = [];
document.querySelector('#f2 button').addEventListener('click', e=>{
    e.preventDefault();
    let obj = {};
    const myUl = document.getElementById('myUl');
    const myLi = document.createElement('li');
    const vertices = document.querySelector('#f2 input[name="vertices"]');
    const a = document.querySelector('#f2 input[name="tF"]');
    const b = document.querySelector('#f2 input[name="tS"]');
    const c = document.querySelector('#f2 input[name="tT"]');
    myLi.innerHTML = `<b>${vertices.value}</b> ${a.value}, ${b.value}, ${c.value}`;
    obj['vertices'] = vertices.value;
    obj[`${obj.vertices[0]}`] = Number(a.value);
    obj[`${obj.vertices[1]}`] = Number(b.value);
    obj[`${obj.vertices[2]}`] = Number(c.value);
    dataTask3.push(obj);
    document.getElementById('t-list').innerHTML += obj.vertices + ' ';
    vertices.value = '';
    a.value = '';
    b.value = '';
    c.value = '';
    myUl.append(myLi);
});
document.querySelector('#f2 a').addEventListener('click', e=>{
    e.preventDefault();

    let result = sortTriangles(dataTask3);
    if(result.reason){
        document.getElementById('2').innerHTML = `status: ${result.status} \nreason:${result.reason}`;
    }else{
        document.getElementById('2').innerHTML = `Отсортированые треугольники:\n[ `;
        result.forEach(item=>{
            document.getElementById('2').innerHTML += `${item} `;
        })
        document.getElementById('2').innerHTML += `]`;
    }
});

//4 task
document.querySelector('#f3 button').addEventListener('click', e=>{
    e.preventDefault();
    let number = Number(document.querySelector('#f3 input[name="number"]').value);
    let result = findPalindrome(number);
    if(result.reason){
        document.getElementById('3').innerHTML = `status: ${result.status} \nreason:${result.reason}`;
    }else{
        document.getElementById('3').innerHTML = `Наибольший палиндром -> ${result}`;
    }
});

//5 task
document.querySelector('#f4 button').addEventListener('click', e=> {
    e.preventDefault();
    let obj ={
        min: Number(document.querySelector('#f4 input[name="ticketMin"]').value),
        max: Number(document.querySelector('#f4 input[name="ticketMax"]').value),
    };
    let result = whichMethodWins(obj);
    if(result.reason){
        document.getElementById('4').innerHTML = `status: ${result.status} \nreason:${result.reason}`;
    }else{
        document.getElementById('4').innerHTML = `Метод-победитель -> ${result.winner}\nКол-во счастливых билетов по простому способу -> ${result.simple}\nКол-во счастливых билетов по сложному способу -> ${result.difficult}`;
    }
});

//6 task
document.querySelector('#f5 button').addEventListener('click', e=> {
    e.preventDefault();
    let data = {};
    document.querySelectorAll('#f5 input').forEach(item=>{
        data[item.name] = Number(item.value);
    });
    let result = showRowOfSquares(data.length ,data.minPow);
    if(result.reason){
        document.getElementById('5').innerHTML = `status: ${result.status} \nreason:${result.reason}`;
    }else{
        document.getElementById('5').innerHTML = `Числовой ряд: ${result}`;
    }
});

//7 task
document.querySelector('#f6-1 button').addEventListener('click', e=> {
    e.preventDefault();
    let data = {};
    document.querySelectorAll('#f6-1 input').forEach(item=>{
        data[item.name] = Number(item.value);
    });
    let result = showFibNumbers(data);
    if(result.reason){
        document.getElementById('6').innerHTML = `status: ${result.status} \nreason:${result.reason}`;
    }else{
        document.getElementById('6').innerHTML = `Числовой ряд: \n`;
        result.forEach(item=>{
            document.getElementById('6').innerHTML += `${item} `
        })
    }
});
document.querySelector('#f6-2 button').addEventListener('click', e=> {
    e.preventDefault();
    let data = {};
    document.querySelectorAll('#f6-2 input').forEach(item=>{
        data[item.name] = Number(item.value);
    });
    let result = showFibNumbers(data);
    if(result.reason){
        document.getElementById('6').innerHTML = `status: ${result.status} \nreason:${result.reason}`;
    }else{
        document.getElementById('6').innerHTML = `Числовой ряд: \n`;
        result.forEach(item=>{
            document.getElementById('6').innerHTML += `${item} `
        })
    }
});