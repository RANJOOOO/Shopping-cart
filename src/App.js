import logo from './logo.svg';
import './App.css';
import Navbar from './components/navibari';
import List from './components/List';
import Product from './components/Product';
import { useState } from 'react';
import Footer from './components/Footer';
import Additem from './components/AdditemForm';

function App(){ 

const itemList=[{
  name:"Nokia",
  quantity: 0,
  price:100,
},
{
  name:"Q mobile",
  quantity: 0,
  price: 200,
}
]
let [newlist , setproduct] = useState(itemList);
let [totalamount , setamount] = useState(0);
let [tquantity , setquan]=useState(0);

let addingQ =(index)=>{
let  newitem=[...itemList]
 setproduct(newitem);
}

let addmore=(index)=>
{
    let  newitem1=[...newlist]
    newitem1[index].quantity++;
let newtotalamount=totalamount;
let total=tquantity;
    newtotalamount+=newitem1[index].price;
    total=total+1;
    setamount(newtotalamount);
    setproduct(newitem1);
    setquan(total);
}

let subquan = (index)=>
{
  let  newitem1=[...newlist]
  let newtotalamount=totalamount;
  let total=tquantity;
  if(newitem1[index].quantity > 0)
  {
   newitem1[index].quantity--;
   newtotalamount-=newitem1[index].price;
   total=total-1;
  } 

  setamount(newtotalamount);
  setproduct(newitem1);
  setquan(total);
};

let reset=()=>{
  let  quan=[...newlist]
  quan.map((x)=>{
  return  x.quantity=0;
  })
  setproduct(quan);
  setamount(0);
  setquan(0);
}
let remove=(index)=>{
 
  let removedItem=[...newlist];
  removedItem.splice(index  , 1);
  setproduct(removedItem);
  let amountAfterSplice=totalamount;
  let total=tquantity;
  total-=removedItem[index].quantity;
  amountAfterSplice-=removedItem[index].quantity*removedItem[index].price;
  setquan(total);
  setamount(amountAfterSplice);

}


let additem=(name, price)=>{
  let itemtobeadded=[...newlist];
  itemtobeadded.push({
    price:price,
    name:name,
    quantity:0
  })
  setproduct(itemtobeadded);
}

  return(
  <>
  <Navbar tquantity={tquantity}/>
  <Additem additem={additem}/>
  <main className='my-5 mx-5'>
  <List data={newlist}  addmore={addmore} subquan={subquan} remove={remove}/>
  </main>
  <Footer totalamount={totalamount} reset={reset} data={newlist}/>
  </>
)
}
export default App;
