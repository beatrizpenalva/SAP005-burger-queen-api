const products = {
    1: {
      name: 'Water 500mL',
      price: '5',
      flavor: null,
      complement: null,
      image: null,
      type: 'Drinks',
      subtype: 'All day',
      // createAt:
      // updateAt:
    },
    2: {
      name: 'Water 700mL',
      price: '7',
      flavor: null,
      complement: null,
      image: null,
      type: 'Drinks',
      subtype: 'All day',
      // createAt:
      // updateAt:
    },
    3: {
      name: 'Soda 500mL',
      price: '7',
      flavor: null,
      complement: null,
      image: null,
      type: 'Drinks',
      subtype: 'All day',
      // createAt:
      // updateAt:
    },
    4: {
      name: 'Soda 700mL',
      price: '10',
      flavor: null,
      complement: null,
      image: null,
      type: 'Drinks',
      subtype: 'All day',
      // createAt:
      // updateAt:
    },
    5: {
      name: 'Orange juice',
      price: '10',
      flavor: null,
      complement: null,
      image: null,
      type: 'Drinks',
      subtype: 'All day',
      // createAt:
      // updateAt:
    }
  }
  
  const ProductsController = {
    getAllProducts(req, res) {
      res.send(products);
    }
  }
  
  module.exports = ProductsController;