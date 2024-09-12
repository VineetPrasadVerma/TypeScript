var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var id = 5;
var myName = 'Vineet Verma';
var numArr = [1, 2, 4];
var myTuple = ['vineet', true, 1];
var myTuples = [
    ['vineet', true, 1],
    ['vikas', false, 2],
];
var myNull = undefined;
var myUnion = 'vin';
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 0] = "up";
    Direction1[Direction1["down"] = 1] = "down";
    Direction1[Direction1["left"] = 2] = "left";
    Direction1[Direction1["right"] = 3] = "right";
})(Direction1 || (Direction1 = {}));
var user = {
    id: 1,
    name: 'vineet',
};
var cid = true;
var customerId = cid;
function addNum(x, y) {
    return x + y;
}
console.log(addNum(2, 3));
var user1 = {
    id: 1,
    name: 'von',
};
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return "".concat(this.name, " is registered.");
    };
    return Person;
}());
var vineet = new Person(1, 'vineet');
// console.log(vineet.register())
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
var emp = new Employee(2, 'Darshita', 'Worker');
console.log(emp.register());
console.log(emp.position);
var tempArr = [1, true, 'numebr'];
//Generics
function getArray(items) {
    return new Array().concat(items);
}
var numsArr = getArray([1, 3, 2]);
var stringArr = getArray(['as', 'str']);
