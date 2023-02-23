// 1
function createPhoneNumber(mass) {
    var res = "(";
    res = res + mass[0] + mass[1] + mass[2];
    res += ") ";
    for (var i = 3; i < 6; i++) {
        res += mass[i];
    }
    res += "-";
    for (var i = 6; i < 10; i++) {
        res += mass[i];
    }
    return res;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
//2
var Challenge = /** @class */ (function () {
    function Challenge() {
    }
    Challenge.solution = function (number) {
        var res = 0;
        if (number < 0)
            return 0;
        for (var i = 0; i < number; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                res += i;
            }
        }
        return res;
    };
    return Challenge;
}());
console.log(Challenge.solution(10));
//3
var nums = [1, 2, 3, 4, 5, 6, 7];
var k = 3;
for (var i = 0; i < k; i++) {
    var last = nums[nums.length - 1];
    for (var i_1 = nums.length - 2; i_1 >= 0; i_1--) {
        nums[i_1 + 1] = nums[i_1];
    }
    nums[0] = last;
}
console.log(nums);
//4
var nums1 = [1, 2];
var nums2 = [3, 4];
nums1.sort();
nums2.sort();
var resArray = nums1.concat(nums2).sort();
if (resArray.length % 2 == 1) {
    console.log((resArray[Math.floor(resArray.length / 2)]).toFixed(5));
}
else {
    console.log(((resArray[resArray.length / 2] + resArray[(resArray.length / 2) - 1]) / 2).toFixed(5));
}
//5
var doska = [[5, 3, 0, 5, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]];
function Sudokoo(mass) {
    var nabor = new Set();
    var res = true;
    // проверка на горизонтали
    for (var i = 0; i < doska.length; i++) {
        for (var j = 0; j < doska.length; j++) {
            if (!nabor.has(mass[i][j])) {
                if (mass[i][j] != 0) {
                    nabor.add(mass[i][j]);
                }
            }
            else {
                res = false;
            }
        }
        nabor.clear();
    }
    // проверка на вертикаль
    for (var i = 0; i < doska.length; i++) {
        for (var j = 0; j < doska.length; j++) {
            if (!nabor.has(mass[j][i])) {
                if (mass[j][i] != 0) {
                    nabor.add(mass[j][i]);
                }
            }
            else {
                res = false;
            }
        }
        nabor.clear();
    }
    //проверка на подблоки
    for (var i = 0; i < doska.length; i += 3) {
        for (var j = 0; j < doska.length; j += 3) {
            for (var a = 0; a < 3; a++) {
                for (var b = 0; b < 3; b++) {
                    if (!nabor.has(mass[i + a][j + b])) {
                        if (mass[i + a][j + b] != 0) {
                            nabor.add(mass[i + a][j + b]);
                        }
                    }
                    else {
                        res = false;
                    }
                }
            }
            nabor.clear();
        }
    }
    if (res == true)
        console.log("доска правильная");
    else
        console.log("доска неправильная");
}
Sudokoo(doska);
