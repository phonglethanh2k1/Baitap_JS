function tinhLuong() {
    var luongMotNgay = document.getElementById("luong-mot-ngay").value;
    var soNgayLam = document.getElementById("so-ngay-lam").value;
    var sum = luongMotNgay * soNgayLam;
    document.getElementById('result').innerHTML = `<h1 class="mt-5">Số  tiền nhận được ${sum} vnd </h1>`;
}


   
function tinhTrungBinh() {
    var nhapLanMot = document.getElementById("nhap-lan-mot").value * 1;
    var nhapLanHai = document.getElementById("nhap-lan-hai").value * 1;
    var nhapLanBa = document.getElementById("nhap-lan-ba").value * 1;
    var nhapLanBon = document.getElementById("nhap-lan-bon").value * 1; 
    var nhapLanNam = document.getElementById("nhap-lan-nam").value * 1;
    var sum = (nhapLanMot + nhapLanHai + nhapLanBa + nhapLanBon + nhapLanNam) / 5;
    document.getElementById("result").innerHTML = `<h1>Giá trị trung bình là ${sum}</h1>`
}


function quyDoiTien() {
    var nhapSoTienUsd = parseFloat(document.getElementById('nhap-so-tien-usd').value);
    var vndAmount = nhapSoTienUsd * 23500;
    document.getElementById('result').innerText = vndAmount.toLocaleString() + ' đồng';
}


function tinhDienTichChuVi() {
    var chieuDai = document.getElementById("nhap-chieu-dai").value ;
    var chieuRong = document.getElementById("nhap-chieu-rong").value ;
    var dienTich = chieuDai * chieuRong;
    var chuVi = (chieuDai + chieuRong) * 2;
    document.getElementById("result").innerHTML = `<h2 class="text-danger">Diện tích là ${dienTich}, chu vi là ${chuVi}</h2>`
}


function tinhTong() {
    var haiKySo = document.getElementById("nhap-hai-ky-so").value;
    var hangDonVi = haiKySo % 10;
    var hangChuc = Math.floor(haiKySo / 10);
    var sum = hangDonVi + hangChuc;
    document.getElementById("result").innerHTML = `<h2 class="text-danger mt-4">Tổng của hai số là ${sum} </h2>`
}