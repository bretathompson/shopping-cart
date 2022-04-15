import React from 'react';

export default function Header(props) {
  return (
    <header className="block center">
      <div>
        <a href="#/">
          <h1 className='shoppingcart'>Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a className='cart' href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}            
        </a>{' '}
        <a className='signin' href="#/signin"> SignIn</a>
      </div>
    </header>
  );
}