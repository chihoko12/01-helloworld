var Customer = /** @class */ (function () {
    function Customer() {
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
            return this.x;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
// create an instance
var myCustomer = new Customer("Martin", "Dixon");
myCustomer.firstName = "Martin";
//myCustomer.lastName = "Dixon";
console.log(myCustomer.firstName);
// console.log(myCustomer.lastName);
