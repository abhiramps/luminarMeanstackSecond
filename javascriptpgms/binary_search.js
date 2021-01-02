var arr = [10, 11, 12, 13, 14, 15, 16, 17];
//      0   1   2  3  4  5  6  7
//      l          m            u

arr.sort((num1, num2) => num1 - num2)  //sort

var low = 0;
var upp = arr.length - 1;
var element = 16;
var flag = 0;


while (low < upp) {

    let mid = Math.floor((low + upp) / 2);

    if (element >= arr[mid]) {
        low = mid + 1;

    }
    else if (element < arr[mid]) {
        upp = mid - 1;

    }
    else if (element == arr[mid]) {
        flag++;
        break;

    }
}
if (flag == 0) {
    console.log("element is not found");
}
else {
    console.log("element is found at ");
}