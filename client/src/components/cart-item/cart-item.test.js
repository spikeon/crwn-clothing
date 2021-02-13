import React from 'react';
import {shallow} from 'enzyme';
import CartItem from './cart-item.component';

it('Test Cart Item', () => {
    const item = {
        imageUrl: '',
        price: 100,
        name: 'test',
        quantity: 1
    };

    expect(shallow(<CartItem item={item} />).length).toBe(1);
});