var Product = /** @class */ (function () {
    function Product(theType, theId, theSize, theColor, theCost, theDiscont) {
        this.type = theType;
        this.id = theId;
        this.size = theSize;
        this.color = theColor;
        this.cost = theCost;
        this.discont = theDiscont;
    }
    Object.defineProperty(Product.prototype, "cost", {
        get: function () {
            return this._cost;
        },
        set: function (n) {
            if (n <= 0) {
                console.log("Недопустимая цена!");
            }
            else {
                this._cost = n;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "finalCost", {
        get: function () { return this.cost - this.discont; },
        set: function (value) { this._finalCost = value; },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var products = [];
products[0] = new Product("Boots", 1, 39, "black", 2999, 300);
products[1] = new Product("Sneakers", 2, 41, "white", 3199, 200);
products[2] = new Product("Boots", 42, 3, "black", 3999, 0);
products[3] = new Product("Sneakers", 4, 41, "green", 2499, 0);
products[4] = new Product("Sandals", 5, 38, "black", 999, 0);
products[5] = new Product("Sandals", 5, 37, "blue", 2699, 400);
// Итератор
var Iterator = /** @class */ (function () {
    function Iterator(products) {
        this.index = -1;
        this.products = products;
    }
    Iterator.prototype.next = function () {
        if (this.index < this.products.length - 1) {
            return { done: false, value: this.products[++this.index] };
        }
        else {
            return { done: true, value: null };
        }
    };
    return Iterator;
}());
var iterator = new Iterator(products);
var prod = iterator.next();
while (prod.done == false) {
    console.log(prod.value);
    prod = iterator.next();
}
filter();
sizeFunc();
colorFunc();
var boot2 = {
    ID: 44,
    Size: 39,
    Color: "Yellow",
    Price: 600
};
var boot1 = {
    ID: 53,
    Size: 32,
    Color: "Green",
    Price: 120
};
var produc = {
    Products: [boot1, boot2]
};
function filter() {
    var check1;
    var check2;
    check1 = parseInt(prompt("Введите начальную цену", '2500'));
    check2 = parseInt(prompt("Введите конечную цену", '3000'));
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var sho = products_1[_i];
        if (sho.cost >= check1 && sho.cost <= check2) {
            console.log("Type: ".concat(sho.type, "\tId: ").concat(sho.id, "\tSize: ").concat(sho.size, "\tColor: ").concat(sho.cost, "\tCost: ").concat(sho.cost, "\tDiscont: ").concat(sho.discont, "\tFinalCost: ").concat(sho.finalCost));
        }
    }
    console.log("-----------------------------------------------------------");
}
function sizeFunc() {
    var check1;
    check1 = parseInt(prompt("Введите размер", '41'));
    for (var _i = 0, products_2 = products; _i < products_2.length; _i++) {
        var sho = products_2[_i];
        if (sho.size == check1) {
            console.log("Type: ".concat(sho.type, "\tId: ").concat(sho.id, "\tSize: ").concat(sho.size, "\tColor: ").concat(sho.cost, "\tCost: ").concat(sho.cost, "\tDiscont: ").concat(sho.discont, "\tFinalCost: ").concat(sho.finalCost));
        }
    }
    console.log("-----------------------------------------------------------");
}
function colorFunc() {
    var check1;
    check1 = prompt("Введите цвет", 'black');
    for (var _i = 0, products_3 = products; _i < products_3.length; _i++) {
        var sho = products_3[_i];
        if (sho.color == check1) {
            console.log("Type: ".concat(sho.type, "\tId: ").concat(sho.id, "\tSize: ").concat(sho.size, "\tColor: ").concat(sho.cost, "\tCost: ").concat(sho.cost, "\tDiscont: ").concat(sho.discont, "\tFinalCost: ").concat(sho.finalCost));
        }
    }
    console.log("-----------------------------------------------------------");
}
