class Customer {

  // firstName: string;
  // lastName: string;

  // constructor(theFirst: string, theLast: string) {
  //   this.firstName = theFirst;
  //   this.lastName = theLast;
  // }
  // private _firstName: string;
  // private _lastName: string;
  private x: string;
  private y: string;


  public get firstName(): string {
    // return this._firstName;
    return this.x;
  }

  public set firstName(value: string) {
    // this._firstName = value;
    this.x = value;
  }

}

// create an instance
let myCustomer = new Customer("Martin","Dixon");

myCustomer.firstName = "Martin";
//myCustomer.lastName = "Dixon";

console.log(myCustomer.firstName);
// console.log(myCustomer.lastName);

