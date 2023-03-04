function netPrice(price, tax) {
    let decimalTax = tax / 100
    return (price * (1 - decimalTax))
}