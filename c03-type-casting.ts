//ep kieu - type casting : co 2 cach
//chi ap dung cho data type Any
let kieuAny : any
kieuAny = "Day la kieu string";
console.log('Do dai length cua bien any la: %s',(kieuAny as string).length);

let kieuSoEp : number = 100;
console.log('Do dai length cua bien any la: %s',(<string>kieuAny).length);
