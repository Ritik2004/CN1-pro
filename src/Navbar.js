import React from 'react'

const Navbar = (props) => {        
        return (
            <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
              <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/512/10699/10699687.png" alt="cart-icon"/>
              <span style={styles.cartCount}>{props.count}</span>
            </div>
            </div>
        )
}


export default Navbar

const styles = {
    cartIcon:{
        height:32,
        marginRight:20
    },
    nav:{
        height:70,
        background:'#4267b2',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    cartIconContainer:{
        position:'relative'
    },
    cartCount:{
        background:'yellow',
        borderRadius:'50%',
        padding:'3px 6px',
        position:'absolute',
        right:'0',
        top:'-9'
    }
}