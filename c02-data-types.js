// Du lieu kieu chuoi - string
var myName;
myName = "Tung";
var kieuChuoi;
kieuChuoi = "I was born in Vietnam";
console.log('Hello, my name is %s, %s.', myName, kieuChuoi);
// Du lieu kieu so - number
var kieuSo = 10;
console.log('This is an example of number data type: %s', kieuSo);
// Du lieu mang array - number[] va string[]
var mangSo = [2, 4, 5, 7];
for (var index = 0; index < mangSo.length; index++) {
    console.log(mangSo[index]);
}
var hocVien = ['Nam', 'Tung', 'Thu'];
hocVien.forEach(function (element) {
    console.log(element);
});
// Du lieu kieu DungSai - boolean
var flagDungSai = true;
console.log('Gia tri bien boolean hien hanh la: %s', flagDungSai);
// Du lieu kieu Bo Trang Thai - enum
var TrangThaiKhachHang;
(function (TrangThaiKhachHang) {
    TrangThaiKhachHang[TrangThaiKhachHang["DaDangky"] = 0] = "DaDangky";
    TrangThaiKhachHang[TrangThaiKhachHang["DaThuTien"] = 1] = "DaThuTien";
    TrangThaiKhachHang[TrangThaiKhachHang["HoanThanh"] = 2] = "HoanThanh";
})(TrangThaiKhachHang || (TrangThaiKhachHang = {}));
var trangThaiKhachHang = TrangThaiKhachHang.DaDangky;
console.log('Gia tri bien Trang Thai Khach Hang hien hanh la: %s', trangThaiKhachHang);
// Du lieu kieu hon tap - tuple
// Khai bao du lieu kieu tuple
var x;
// Initialize it
x = ["hello", 10, true]; // OK
// Initialize it incorrectly
x.forEach(function (element) {
    console.log('Gia tri bien Tuple hien hanh la: %s', element);
});
// Du lieu kieu bat ky - Any
// Cho phep thay doi kieu du lieu bat ky khi gan gia tri
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
console.log('Gia tri bien Any hien hanh la: %s', notSure);
