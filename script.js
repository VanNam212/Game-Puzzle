let phan1 = ["funny-cat1_part1x1.jpg", "monkey_part1x1.jpg", "panda_swap_part1x1.jpg"];
let index1 = 0;
function swap1(src) {
    if (index1 < phan1.length-1) {
        index1++;
    } else {
        index1 = 0;
    }
    document.getElementById("a").src = phan1[index1];
    ktra();
}

let phan2 = ["funny-cat1_part2x1.jpg", "monkey_part2x1.jpg", "panda_swap_part2x1.jpg"];
let index2 = 0;
function swap2(src) {
    document.getElementById("b").src = phan2[index2];
    if (index2 < phan2.length-1) {
        index2++;
    } else {
        index2 = 0;
    }
    ktra();
}

let phan3 = ["funny-cat1_part3x1.jpg", "monkey_part3x1.jpg", "panda_swap_part3x1.jpg"];
let index3 = 0;
function swap3(src) {
    document.getElementById("c").src = phan3[index3];
    if (index3 < phan3.length-1) {
        index3++;
    } else {
        index3 = 0;
    }
    ktra();
}

let phan4 = ["funny-cat1_part4x1.jpg", "monkey_part4x1.jpg", "panda_swap_part4x1.jpg"];
let index4 = 0;
function swap4(src) {
    if (index4 < phan4.length-1) {
        index4++;
    } else {
        index4 = 0;
    }
    document.getElementById("d").src = phan4[index4];
    ktra();
}

let phan5 = ["funny-cat1_part5x1.jpg", "monkey_part5x1.jpg", "panda_swap_part5x1.jpg"];
let index5 = 0;
function swap5(src) {
    document.getElementById("e").src = phan5[index5];
    if (index5 < phan5.length-1) {
        index5++;
    } else {
        index5 = 0;
    }
    ktra();
}

function ktra() {
    let ktra1 = document.getElementById("a").src;
    let ktra2 = document.getElementById("b").src;
    let ktra3 = document.getElementById("c").src;
    let ktra4 = document.getElementById("d").src;
    let ktra5 = document.getElementById("e").src;
    if (ktra1.charAt(34) == 'f' && ktra2.charAt(34) == 'f' && ktra3.charAt(34) == 'f' &&
        ktra4.charAt(34)=='f' && ktra5.charAt(34)=='f') {
        alert("Congratulation");
    } else if (ktra1.charAt(34) == 'm' && ktra2.charAt(34) == 'm' && ktra3.charAt(34) == 'm' &&
        ktra4.charAt(34)=='m' && ktra5.charAt(34)=='m') {
        alert("Congratulation");
    } else if (ktra1.charAt(34) == 'p' && ktra2.charAt(34) == 'p' && ktra3.charAt(34) == 'p' &&
        ktra4.charAt(34)=='p' && ktra5.charAt(34)=='p') {
        alert("Congratulation");
    }
}