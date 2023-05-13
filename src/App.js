
import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor(){
    super();
    this.state= {
        products:[
            {
                    id:1,
                    price:999,
                    title:'Watch',
                    qty:1,
                    img:'https://media.istockphoto.com/id/1372077120/photo/over-the-shoulder-view-of-young-asian-sports-woman-checks-her-fitness-statistics-on.jpg?b=1&s=170667a&w=0&k=20&c=HhpWisvAfZ5olRGtUrBrz43K9d_P7je5FJWeyQN6QsM='
            },
            {   
                id:2,
                price:999,
                title:'Phone',
                qty:10,
                img:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60'
            },
            {   
                id:3,
                price:999,
                title:'Laptop',
                qty:4,
                img:'https://plus.unsplash.com/premium_photo-1681666713728-9ed75e148617?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
            },
            
            {   
                id:4,
                price:999,
                title:'Play station',
                qty:8,
                img:'https://media.istockphoto.com/id/1460415598/photo/playstation-stick.jpg?b=1&s=170667a&w=0&k=20&c=ArHrohxY2q3f-kjQRWhS5g4jjv2NYwA1XmDiFoW8PHQ='
            }
        ]
    }
}
handleIncreaseQuantity = (product) => {
    console.log("increase quantity")
    const {products} = this.state;
    const index = products.indexOf(product);

    products[index].qty+=1;
    this.setState({
        products
    })
}
handleDecreaseQuantity = (product) => {
   const {products} = this.state;
   console.log("decrease quantity")
   const index = products.indexOf(product);
 
   if(products[index].qty === 0){
        return;
   };
   products[index].qty -= 1;
   this.setState({
    products
   })
}
handleDeleteProduct = (id) => {
    console.log("delete")

    const {products} = this.state;

    const items = products.filter((item) => item.id !== id);

    this.setState({
        products: items
    })
}
getCartCount = () => {
  const {products} = this.state;
  
  let count=0;

  products.forEach((product)=>{
    count+=product.qty
  })
  return count;
}
getCartTotal = ()=>{
  const {products} = this.state;

  let cartTotal=0;

  products.map((product)=>{
     cartTotal = cartTotal + product.qty * product.price
  })
  return cartTotal
}

  render(){
    const {products} = this.state;
  return (
    <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart 
                  products={products}
                  onIncreaseQuantity = {this.handleIncreaseQuantity}
                  onDecreaseQuantity = {this.handleDecreaseQuantity}
                  onDeleteProduct = {this.handleDeleteProduct}
        />
        <div style={{fontSize:20, padding:10}}>TOTAL:{this.getCartTotal()}</div>
    </div>
  );
  }
}

export default App;
