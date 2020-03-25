// boki trójkąta
a = 3;
b = 4;
c = 5;
h = 7


// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

//Połowa obwodu
const p = (a + b + c)/2; 

//Zmienna pomocnicza
const auxiliary = (p-a) * (p-b) * (p-c); 

//Wzror Herona
const P = () => p * Math.sqrt(auxiliary);

console.log(`Pole trókąta o bokach ${a}, ${b} oraz ${c} wynosi ${P()}`);