import React from 'react'

class CartItem extends React.Component {
    constructor(){
        super();
        this.state={
            price:999,
            title:'Phone',
            qty:1,
            img:''
        }
    }
    // testing(){
    //     const promise = new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             resolve('done')
    //         },5000)
    //     })
    //     promise.then(()=>{
    //         this.setState({qty:this.state.qty})

    //     })
    // }
    increaseQuantity=()=>{
        console.log('increase this')
        //setState form1 
        // this.setState({
        //     qty:this.state.qty+1
        // });

        //setstate form2 if prev state required use this
        this.setState((prevState) => {
            return {
                qty:prevState.qty+1
            }
        },()=>{
            console.log('this state',this.state)
        })
    }
    decreaseQuantity =() =>{
        const {qty} = this.state;
        if(qty===0){
            return;          
        }
        this.setState((prevState)=>{
            return {
           qty:prevState.qty-1
            }
        },()=>{
            console.log('this state',this.state)
        })
    }
    render(){
        const{ price,title,qty } = this.state;
        return (
            <div className='cart-item'>
            <div className='left-block'>
              <img style={styles.image}/>
            </div>
            <div className='right-block'>
           <div style={{fontSize:25}}>{title}</div>
           <div style={{color:'#777'}}>{price}</div>
           <div style={{color:'#777'}}>{qty}</div>
           <div className='cart-item-action'>
              {/* {buttons} */}
              <img alt="increase" 
              className='action-icons'
               src='https://cdn-icons-png.flaticon.com/128/7327/7327422.png'
                onClick={this.increaseQuantity}
                // {this.increaseQuantity.bind(this)}
              />
              <img alt="decrease"
               className='action-icons' 
               src='https://cdn-icons-png.flaticon.com/128/7327/7327424.png'
               onClick={this.decreaseQuantity}
               />
              <img alt="delete" 
              className='action-icons'
               src='https://cdn-icons-png.flaticon.com/128/1828/1828843.png'

               />
           </div>
            </div>
            </div>
        )
}
}

export default CartItem

const styles = {
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}