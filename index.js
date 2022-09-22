const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')
const routes = require('./routes/route')
const routesA = require('./routes/albumsRouter')
require('dotenv').config()


const MongoString = process.env.DATABASE_URL
mongoose.connect(MongoString)

const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log("Database connected")
})

const app = express()
app.use(cors());
app.use(express.json())
app.use('/api', routes)
app.use('/api', routesA)
// Add headers before the routes are defined

/*
let initialPosition = [0, 4]
let portalA = [1, 1]
let portalB = [2, 3]
let height = 5
let width = 5
let map = []
let moves = "DDD"

function compareArray(initial, portal) {
    return JSON.stringify(initial) === JSON.stringify(portal)
}

for (let i = 0; i < moves.length; i++) {

    switch (moves[i]) {
        case "D":
            if (initialPosition[1] < height && initialPosition[1] >= 0) {
                initialPosition[1] = initialPosition[1] + 1
                if (compareArray(initialPosition, portalA)) initialPosition = portalB
                if (compareArray(initialPosition, portalB)) initialPosition = portalA
            }
            break;
        case "U":
            if (initialPosition[1] > 0) {
                initialPosition[1] = initialPosition[1] - 1
                if (compareArray(initialPosition, portalA)) initialPosition = portalB
                if (compareArray(initialPosition, portalB)) initialPosition = portalA
            }
            break;
        case "R":
            if (initialPosition[0] < width) {
                initialPosition[0] = initialPosition[0] + 1
                if (compareArray(initialPosition, portalA)) initialPosition = portalB
                if (compareArray(initialPosition, portalB)) initialPosition = portalA
            }
           
            break;
        case "L":
            if (initialPosition[0] > 0){
                initialPosition[0] = initialPosition[0] - 1
                if (compareArray(initialPosition, portalA)) initialPosition = portalB
                if (compareArray(initialPosition, portalB)) initialPosition = portalA
            }
           
            break;

    }
}*/
//console.log(initialPosition)

//entrevista
/*
let n = 15;
result = [];
suma = 0
for(let i = 3;i<n;i++){
    if(i % 3 == 0){
        if(!result.includes(i)) result.push(i)
    }
    if(i % 5 == 0){
        if(!result.includes(i)) result.push(i)
    }
    if(i % 7 == 0){
        if(!result.includes(i)) result.push(i)
    }
}
result.forEach(el => {
    suma = suma + el
})
console.log(result)
console.log(suma)
*/

/*
let numbers = [1,2,9]
let numberClone = numbers
if (numbers.length == 2) console.log(Math.max(...numbers)-Math.min(...numbers))
let result = 100000;
let aux = 0;
numbers.forEach((el) => {
    for(let i = 0;i<numberClone.length;i++){
        if (el == numberClone[i]) continue;
        if (el > numberClone[i]){
            aux = el - numberClone[i]
        } else {
            aux = numberClone[i] - el
        }
        if (aux < result){
            result = aux;
        }
    }
})
console.log(result)
*/


/*

let words = ["perro","gato","Ahe","Ahe"]
let wordsUnicas = [...new Set(words)];
wordsUnicas.sort()
let result = []
wordsUnicas.forEach((el) => {
    let count = 0
    for(let i=0;i<words.length;i++){
        if(el === words[i]){
            count++
        }
    }
    result.push(count)
})

console.log(result)
*/
/*
let arra = [5,2,-5,-3,-1]
let arraMax = arra.filter((el) => el>0)
let arraMin = arra.filter((el) => el<0)
console.log(arraMin)
let negative = Math.max(...arraMin)
let positive = Math.min(...arraMax)
if (positive == (-negative)){
    console.log(positive)
} else {
    if (positive < (-negative)){
        console.log(positive)
    } else {
        console.log(negative)
    }
}*/

//swap number
/*
let num = 27
let numString = num+""
let newNum = parseInt(numString[1]+numString[0])
if (newNum >= num){
    console.log(true)
}else {
    console.log(false)
}*/



//expresion regular x|y
/*let expression = /red flag|blue flag/
let value = ' ss blue flag'
let num = parseInt()
console.log(expression.exec(value))
*/

//exersice expression regulars
//let valor = 'sdfs 16:02 10 12 hjhkj 12 9'
//let expresion = /\d{2}\:\d{2}/
//console.log(expresion.exec(valor))

//find a word
//let word = "UcUNFYGaFYFYGtNUH"
//let result = ''
/*for(let i = 0; i<word.length;i++){
    if(word[i] !== word[i].toUpperCase()){
        result = result + word[i]
    }
    //console.log(word[i] + " "+ word[i].toUpperCase());
}
console.log(result)
*/

//transform to binary
/*
let decimal = 10
let binary = ""
let residuio = decimal % 2
let truncado = Math.trunc(decimal / 2)
binary = binary + residuio
console.log(binary)
while (truncado >= 1){
    residuio = truncado % 2
    truncado = Math.trunc(truncado / 2)
    binary = binary + residuio
    console.log(binary)
}
console.log("result" + reverse(binary))
*/
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("Server Starter at "+PORT)
})