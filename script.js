// Imprimir impares del 1 al 20

for(let num = 1; num <= 20; num++){
    if(num % 3 === 0 ){
        console.log(`Impares for loop: ${num}`)
    }
}

console.log('************')

let num = 1;

while(num <= 20){
    if(num % 3 === 0){
        console.log(`Impares while loop: ${num}`)
    }
    num++
}
console.log()
console.log('************')
console.log()


// Disminuir multiply de 3 del 100 al 0

for(let num = 100; num >= 0; num--){
    if(num % 3 === 0){
        console.log(`Disminución multiply de 3 for loop: ${num}`)
    }
}

console.log('************')

let num2 = 100;

while(num2 >= 0){
    if(num2 % 3 === 0){
        console.log(`Disminución multiply de 3 while loop: ${num2}`)
    }
    num2--
}

console.log()
console.log('************')
console.log()
//Imprime la secuencia

for(let num = 4;num >= -3.5; num -=1.5){
    console.log(`Secuencia for Loop: ${num}`)
}

console.log('************')

let num3 = 4;
while(num3 >= -3.5){
    console.log(`Secuencia while loop: ${num3}`)
    num3-=1.5
}

console.log()
console.log('************')
console.log()


// Sigma

let sum = 0;

for (let num = 1; num <= 100; num++) {
    sum += num
}
console.log(`Sigma for loop: ${sum}`)

console.log()
console.log('**************')
console.log()

let sum2 = 0;
let contador = 1;

while(contador <=100){
    sum2 += contador;
    // console.log(sum2)
    contador++
}

console.log(`Sigma while loop: ${sum2}`)

console.log()
console.log('**********')
console.log()


//Factorial

let product = 1;

for(let num = 1;num <= 12;num++){
    product *= num;
    console.log(product)
}
console.log()
console.log(`Factorial for loop: ${product}`)
console.log()
console.log('********')
console.log()

let product2 = 1;
let multiply = 1;

while(multiply <= 12){
    product2 *= multiply;
    console.log(product2)
    multiply++
}
console.log()
console.log(`Factorial while loop: ${product2}`)
