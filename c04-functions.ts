//Ham tra ve kieu hoac tra ve void

function tinhTong(a: number,b: number) : number{
    return(a+b)
}

console.log('Ket qua cua ham tinh tong la: %s', tinhTong(3,4));

function hamVoid() : void{
    console.log('Hello world')
    
}

hamVoid()

//Ham anonymous
//Ham anonymous cho phep tiet kiem bo nho khi pointer truc tieng var vao ham
//Su dung chi 1 memory location thay vi 2 memory locations
let bienHamAnonymous1 = function(x: string, y: number) : string {
    return 'Chao '+x +' nam nay ban '+y+' tuoi co phai ko?';
}

console.log(bienHamAnonymous1("Tung",33));

//Cach viet khac cua ham anonymous
let bienHamAnonymous2 = (bieuThuc1:number ,bieuThuc2: number) : number => {
    return (bieuThuc1 + bieuThuc2)
}
console.log('Tong cua 2 chu so la: %s', bienHamAnonymous2(3,5));
