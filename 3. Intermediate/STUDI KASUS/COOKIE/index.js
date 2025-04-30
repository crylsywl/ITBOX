class Cookie {
  constructor(nama, type, price) {
    this.nama = nama;
    this.type = type;
    this.price = price;
  }
}

class Chocolate extends Cookie {
  constructor(nama, price, isSweet) {
    super(nama, "Chocolate", price);
    this.isSweet = isSweet || false;
  }
}
class Strawberry extends Cookie {
  constructor(nama, price, isSweet) {
    super(nama, "Strawberry", price);
    this.isSweet = isSweet || false;
  }
}
class Blueberry extends Cookie {
  constructor(nama, price, isSweet) {
    super(nama, "Blueberry", price);
    this.isSweet = isSweet || false;
  }
}

class Oven {
  constructor(container) {
    this.container = container || [];
  }
  bake(cookie) {
    this.container.push(cookie);
  }
  delivery(cookie_nama) {
    this.container = this.container.filter(
      (cookie) => {return cookie.nama !== cookie_nama}
    );
  }
}

const oven = new Oven();
oven.bake(new Chocolate("Brownis", 100000));
oven.bake(new Strawberry("Red Velvet", 125000));
oven.bake(new Blueberry("Mils Creeps", 200000));
oven.delivery("Brownis");

console.log(oven.container);
