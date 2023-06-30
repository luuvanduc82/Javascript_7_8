const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


let arrTxtNumer = $('#txtArray');
let arrTxtNumer9 = $('#txtArray9');
let arrNum = [];
let arrNum9 = [];

function getNumber() {
    let number = +$('#inputNum').value;
    arrNum.push(number);
    arrTxtNumer.innerHTML = arrNum;
}

function getNumber9() {
    let number = +$('#inputNum9').value;
    arrNum9.push(number);
    arrTxtNumer9.innerHTML = arrNum9;
}
// tính tổng số dương
function sumPositive() {
    let sum1 = 0;
    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] > 0) {
            sum1 += arrNum[i];
        }
    }
    $('#txtSum').innerHTML = sum1;
}
// đếm số dương
function countnumber() {
    let count = 0;
    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] >= 0) {
            count++;
        }
    }
    $('#txtCount').innerHTML = count;
}

// tìm số nhỏ nhất
function findMin() {
    for (let i = 1; i < arrNum.length; i++) {
        if (arrNum[i] < arrNum[0]) {
            arrNum[0] = arrNum[i];
        }
    }
    $('#txtMin').innerHTML = arrNum[0];
}

//tìm số dương nhỏ nhất
function findMinpositive() {
    let arrNumPos = [];
    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] > 0) {
            arrNumPos.push(arrNum[i]);
        }
    }
    if (arrNumPos.length > 0) {
        for (let j = 0; j < arrNumPos.length; j++) {
            if (arrNumPos[j] < arrNumPos[0]) {
                arrNumPos[0] = arrNumPos[j];
            }
        }
        $('#txtMinPos').innerHTML = arrNumPos[0];
    } else {
        $('#txtMinPos').innerHTML = "Không có số dương nhỏ nhất";
    }

    $('#txtMinPos').innerHTML = arrNumPos[0];
}

// tìm số chẵn cuối cùng
function finLastEven() {
    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] % 2 === 0) {
            arrNum[0] = arrNum[i];
        } else {
            $('#txtLastEven').innerHTML = 'Không có số chẵn'
        }
    }
    $('#txtLastEven').innerHTML = arrNum[0];
}
//đổi chỗ 2 vị trí
function changePosition() {
    let num1 = +$('#num1').value;
    let num2 = +$('#num2').value;
    let arr = arrNum[num1];
    arrNum[num1] = arrNum[num2];
    arrNum[num2] = arr;
    $('#txtChangePosition').innerHTML = arrNum;
}

// sắp xếp tăng dần
function incrementNum() {
    let incre;
    for (let i = 0; i < arrNum.length; i++) {
        for (let j = 0; j < arrNum.length - 1; j++) {
            if (arrNum[j] > arrNum[j + 1]) {
                incre = arrNum[j];
                arrNum[j] = arrNum[j + 1];
                arrNum[j + 1] = incre;
            } else {
                arrNum[j] = arrNum[j]
            }
        }
    }
    $('#txtIncrement').innerHTML = arrNum;
}

// tìm số nguyên tố đầu tiên
function findPrime() {
    for (let i = 0; i < arrNum.length; i++) {
        let isPrime = true;
        if (arrNum[i] < 2) {
            isPrime = false;
        }
        for (let j = 2; j <= Math.sqrt(arrNum[i]); j++) {
            if (arrNum[i] % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            $('#txtPrime').innerHTML = arrNum[i];
            return;
        }
    }
    $('#txtPrime').innerHTML = "Không có số nguyên tố";
}

// Đém số nguyên

function getIntent() {
    let count = 0;
    for (let i = 0; i < arrNum9.length; i++) {
        if (Number.isInteger(arrNum9[i])) {
            count++;
        }
    }
    $('#txtInt').innerHTML = `Số nguyên là:${count}`;
}

//so sánh số lượng số âm và dương

function compareNum() {
    let soAm = [];
    let soDuong = [];
    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] < 0) {
            soAm.push(arrNum[i]);
        } else {
            soDuong.push(arrNum[i]);
        }
    }
    if (soAm.length > soDuong.length) {
        $('#txtCompare').innerHTML = "Số âm > Số dương";
    } else if (soAm.length === soDuong.length) {
        $('#txtCompare').innerHTML = "Số dương = Số âm";
    } else {
        $('#txtCompare').innerHTML = "Số dương > Số âm";
    }
}