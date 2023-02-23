class Product{
    type:string;
    readonly id:number;
    readonly size:number;
    readonly color:string;

    private _cost:number;
    public get cost():number{
        return this._cost;
    }
    public set cost(n:number){
        if(n<=0){
            console.log("Недопустимая цена!");
        }
        else{
            this._cost = n
        }
    }

    readonly discont:number;

    private _finalCost:number;
    public get finalCost():number{ return this.cost - this.discont}
    public set finalCost(value:number){this._finalCost = value}
    
    constructor(theType:string, theId:number, theSize:number, theColor:string, theCost:number, theDiscont:number){
        this.type = theType
        this.id = theId
        this.size = theSize
        this.color = theColor
        this.cost = theCost
        this.discont = theDiscont
    }
}

let products:Product[] = [];
products[0] = new Product("Boots", 1, 39, "black", 2999, 300)
products[1] = new Product( "Sneakers", 2, 41, "white", 3199, 200)
products[2] = new Product("Boots", 42, 3, "black", 3999, 0)
products[3] = new Product("Sneakers", 4, 41, "green", 2499, 0)
products[4] = new Product("Sandals", 5, 38, "black", 999, 0)
products[5] = new Product("Sandals", 5, 37, "blue", 2699, 400)

// Итератор
class Iterator {
  index: number;
  public products:Product[]
  constructor(products:Product[])
  {
      this.index = -1;
      this.products = products;
  }
  next():any
  {
      if(this.index < this.products.length - 1)
      {
          return{done:false, value:this.products[++this.index]};
      }
      else  {
          return {done:true, value: null};
      }
  }
}
let iterator:Iterator = new Iterator(products)
let prod:any = iterator.next();
while(prod.done == false)
{
  console.log(prod.value);
  prod = iterator.next();
}


filter()
sizeFunc()
colorFunc()

// 4 задание
interface IBoots
{
  readonly ID : number;
  readonly Size : number;
  readonly Color : string;
  Price : number;
}
interface IProducts
{
  Products: IBoots[]
}

let boot2 : IBoots =
{
ID: 44,
Size: 39,
Color: "Yellow",
Price: 600
};
let boot1 : IBoots =
{
ID: 53,
Size: 32,
Color: "Green",
Price: 120
};

let produc : IProducts =
{
Products: [boot1, boot2]
}

function filter() {
    let check1:number;
    let check2:number;
    check1 = parseInt(prompt("Введите начальную цену", '2500'));
    check2 = parseInt(prompt("Введите конечную цену", '3000'));
    for(let sho of products)
      {
        if(sho.cost >= check1 && sho.cost <= check2)
        {
          console.log(`Type: ${sho.type}\tId: ${sho.id}\tSize: ${sho.size}\tColor: ${sho.cost}\tCost: ${sho.cost}\tDiscont: ${sho.discont}\tFinalCost: ${sho.finalCost}`);
         
        }
      }
      console.log(`-----------------------------------------------------------`);
}
function sizeFunc() {
    let check1;
    check1 = parseInt(prompt("Введите размер", '41'));
    for(let sho of products)
      {
        if(sho.size == check1)
        {
          console.log(`Type: ${sho.type}\tId: ${sho.id}\tSize: ${sho.size}\tColor: ${sho.cost}\tCost: ${sho.cost}\tDiscont: ${sho.discont}\tFinalCost: ${sho.finalCost}`);
        }
      }
      console.log(`-----------------------------------------------------------`);
}
function colorFunc() {
    let check1;
    check1 = prompt("Введите цвет", 'black');
    for(let sho of products)
      {
        if(sho.color == check1)
        {
          console.log(`Type: ${sho.type}\tId: ${sho.id}\tSize: ${sho.size}\tColor: ${sho.cost}\tCost: ${sho.cost}\tDiscont: ${sho.discont}\tFinalCost: ${sho.finalCost}`);
          
        }
      }
      console.log(`-----------------------------------------------------------`);
}