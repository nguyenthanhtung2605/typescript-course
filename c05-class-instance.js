var NhanVatGame = /** @class */ (function () {
    //tao Constructors
    function NhanVatGame(tenNhanVat, slogan, mau, sucManh) {
        this.tenNhanVat = tenNhanVat;
        this.slogan = slogan;
        this.mau = mau;
        this.sucManh = sucManh;
    }
    NhanVatGame.prototype.bomMau = function (x) {
        this.mau += x;
        return this.mau;
    };
    NhanVatGame.prototype.hienThiTenNhanVat = function () {
        return "Nhat vat : " + this.tenNhanVat + " - " + this.slogan + ", co chi so mau la\n        " + this.mau + " va chi so suc manh la " + this.sucManh;
    };
    return NhanVatGame;
}());
var nhanVat1 = new NhanVatGame('hesman', 'Robot Su Tu', 1000, 999);
console.log(nhanVat1.hienThiTenNhanVat());
nhanVat1.bomMau(10);
console.log(nhanVat1.hienThiTenNhanVat());
