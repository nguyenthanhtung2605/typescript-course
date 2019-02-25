// Du lieu kieu chuoi - string
var myName : string;
myName = "Tung"

var kieuChuoi : string;
kieuChuoi = "I was born in Vietnam"

console.log('Hello, my name is %s, %s.',myName,kieuChuoi)
// Du lieu kieu so - number
var kieuSo : number = 10;

console.log('This is an example of number data type: %s',kieuSo)


// Du lieu mang array - number[] va string[]
var mangSo : number[] = [2,4,5,7]
for (let index = 0; index < mangSo.length; index++) {
    console.log(mangSo[index]);
    
}

var hocVien : string[] = ['Nam','Tung','Thu']
hocVien.forEach(element => {
    console.log(element)
});


// Du lieu kieu DungSai - boolean

var flagDungSai : boolean = true;
console.log('Gia tri bien boolean hien hanh la: %s',flagDungSai)

// Du lieu kieu Bo Trang Thai - enum
enum TrangThaiKhachHang {DaDangky, DaThuTien, HoanThanh} 
var trangThaiKhachHang : TrangThaiKhachHang = TrangThaiKhachHang.DaDangky
console.log('Gia tri bien Trang Thai Khach Hang hien hanh la: %s',trangThaiKhachHang)

// Du lieu kieu hon tap - tuple

// Khai bao du lieu kieu tuple
var x: [string, number, boolean];
// Initialize it
x = ["hello", 10, true]; // OK
// Initialize it incorrectly
x.forEach(element => {
    console.log('Gia tri bien Tuple hien hanh la: %s',element)
});


// Du lieu kieu bat ky - Any
// Cho phep thay doi kieu du lieu bat ky khi gan gia tri

var notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

console.log('Gia tri bien Any hien hanh la: %s',notSure);

