//Ejercicio suma acumulada desde el 1 al 5 usando 3 ciclos diferentes

let min = 1;
let max = 5;

let sumaAcumulada = 0;

for (min;min<=max;min++){
    sumaAcumulada =  sumaAcumulada + min;
    console.log(sumaAcumulada);
}

min = 1;
max = 5;

sumaAcumulada = 0;

while(min<=max){
    sumaAcumulada = sumaAcumulada + min;
    min++;
    console.log(sumaAcumulada);
}

min = 1;
max = 5;

sumaAcumulada = 0;

do{
    sumaAcumulada = sumaAcumulada + min;
    min++;
    console.log(sumaAcumulada);
}while(min<=max)
