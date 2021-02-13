// stripeCurrencyConversion: does output equals input times 100

import {stripeCurrencyConversion} from './stripe.utils';

it('Stripe Currency Conversion', () => {
    const result5 = stripeCurrencyConversion(5);
    const result5000 = stripeCurrencyConversion(5000);

    expect(stripeCurrencyConversion(1)).toBe(100);
    expect(stripeCurrencyConversion(2)).toBe(200);
    expect(stripeCurrencyConversion(5)).toBe(500);
    expect(stripeCurrencyConversion(500)).toBe(50000);
});