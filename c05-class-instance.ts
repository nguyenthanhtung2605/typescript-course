class NhanVatGame{
    //khai bao thuoc tinh
    tenNhanVat: string;
    slogan: string;
    mau: number;
    sucManh: number;

    //tao Constructors

    constructor(tenNhanVat: string, slogan: string, mau: number,sucManh: number){
        this.tenNhanVat = tenNhanVat;
        this.slogan = slogan;
        this.mau = mau;
        this.sucManh = sucManh;
    }
    
    bomMau(x: number) : number{
        this.mau += x;
        return this.mau
    }

    hienThiTenNhanVat() : string{
        return `Nhat vat : ${this.tenNhanVat} - ${this.slogan}, co chi so mau la
        ${this.mau} va chi so suc manh la ${this.sucManh}`        
        ;
    }
}

var nhanVat1 = new NhanVatGame('hesman','Robot Su Tu', 1000, 999)

console.log(nhanVat1.hienThiTenNhanVat());
nhanVat1.bomMau(10);
console.log(nhanVat1.hienThiTenNhanVat());

