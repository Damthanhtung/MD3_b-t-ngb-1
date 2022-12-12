// function number(arr) {
//     let array = [];
//     for (let i =0; i<arr.length; i++) {
//         if (array.indexOf(arr[i])===-1) {
//             array.push(arr[i]);
//         }
//     }
//     return array;
// }
// console.log(number([1,1,2,3,4,5,6]));

function tinhTien(number) {
    let soto5 = 0
    let soto2 = 0
    let soto1 = 0
    let du = number % 5;
    let soDu = number % 5;
    if (du !== 0) {
        soto5 = (number- du) / 5;
        du = du % 2
        if (du !== 0) {
            du = soDu % 2
            soto2 = (soDu-du)/2
            soto1 = du
        } else {
            soto2 = du /2
        }
    } else {
        soto5 = number/5
    }
    console.log(soto2)
    console.log( soto1)
    console.log( soto5)
}
tinhTien(13);