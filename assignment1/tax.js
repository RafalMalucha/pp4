function netPrice(price, tax) {
    decimalTax = tax / 100;
    return (price * (1 - decimalTax));
}