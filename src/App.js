import React, { Component } from 'react';
import './App.css';
import { vegitables } from './vegitables'
class App extends Component {
  constructor() {
    super()
    this.state = {
      //   vegitables: [
      //     {
      //       img: 'https://images-na.ssl-images-amazon.com/images/I/313SCrwGIqL.jpg',
      //       name: 'Onion/Vulligadda/Ullipaya',
      //       original_price: 16.25,
      //       mrp: 13,
      //       delivery: 'Tomarrow Evening',
      //       express_delivery: 'Out of stock',
      //       qty: 1,
      //       offer: 20,
      //       quantity: [
      //         { grams: 500, price: 13.00 },
      //         { grams: 1000, price: 26.00 },
      //         { grams: 1500, price: 39.00 },
      //       ]
      //     },
      //     {
      //       img: 'https://www.gardenbedraised.com/uploads/5/7/5/9/5759721/s339185913934037905_p114_i2_w800.jpeg',
      //       name: 'Tomato-Local',
      //       original_price: 28.75,
      //       mrp: 23,
      //       delivery: 'Tomarrow Evening',
      //       express_delivery: 'Out of stock',
      //       qty: 1,
      //       offer: 20,
      //       quantity: [
      //         { grams: 500, price: 23.00 },
      //         { grams: 1000, price: 46.00 },
      //         { grams: 1500, price: 69.00 },
      //       ]
      //     },
      //     {
      //       img: 'https://2.imimg.com/data2/EP/TG/MY-4395813/kufri-lauvkar-potato-250x250-250x250.jpg',
      //       name: 'Potato/alugadda/bangala Dumpa/aloo',
      //       original_price: 15,
      //       mrp: 12,
      //       delivery: 'Tomarrow Evening',
      //       express_delivery: 'Out of stock',
      //       qty: 1,
      //       offer: 20,
      //       quantity: [
      //         { grams: 500, price: 12.00 },
      //         { grams: 1000, price: 24.00 },
      //         { grams: 1500, price: 36.00 },
      //       ]
      //     },
      //     {
      //       img: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantImages/f49579c1-1e6d-4ad4-ab52-26ac0318fbcf.JPG',
      //       name: 'Ladies Finger/Bendakaya',
      //       original_price: 12.50,
      //       mrp: 10,
      //       delivery: 'Tomarrow Evening',
      //       express_delivery: 'Out of stock',
      //       qty: 1,
      //       offer: 20,
      //       quantity: [
      //         { grams: 250, price: 10.00 },
      //         { grams: 500, price: 20.00 },
      //         { grams: 750, price: 30.00 },
      //       ]
      //     }
      //   ]
      vegitables: []
    }
  }

  componentDidMount() {
    this.setState({ vegitables })
  }

  handleChange = (e) => {
    console.log(this.state.vegitables[e.target.dataset.id]);
    
    if (['qty'].includes(e.target.title)) {
      let vegitables = [...this.state.vegitables]
      vegitables[e.target.dataset.id][e.target.title] = e.target.value
      this.setState({ vegitables })
    }
  }

  render() {
    let { vegitables } = this.state
    return (
      <div>
        <div className="row">
          {vegitables.map((object, key) => {
            let qty = `qty-${key}`
            return (
              <div className="col-sm-3" key={key}>
                <p>GET {object.offer}% OFF</p>
                <img src={object.img} alt={object.img} style={{ width: 200, height: 200 }} />
                <p>Fresho</p>
                <h3>{object.name}</h3>
                <select >
                  {object.quantity.map((obj, id) => {
                    return (
                      <option key={id}>{obj.grams}g - Rs {obj.price}</option>
                    )
                  })}
                </select>
                <h5><strike>MRP:Rs.{object.original_price}</strike> <b>Rs.{object.mrp}</b></h5>
                <h5><span><img src='https://cdn4.iconfinder.com/data/icons/shopping-e-commerce-44/64/x-47-512.png' alt='standard delivery' style={{height:18,width:18}}/></span>  Standard Delivery:{object.delivery}</h5> 
                <p><span><img src='https://icon-library.net/images/deliver-icon/deliver-icon-0.jpg' alt='express delivery' style={{height:15,width:15}}/></span>  Express Delivery:{object.express_delivery}</p>
                <input type='number' name={qty} title='qty'
                  data-id={key} value={object.qty} onChange={this.handleChange} /><span><button>ADD <img src='https://library.kissclipart.com/20180905/ssq/kissclipart-basket-icon-png-clipart-computer-icons-clip-art-e7b723b8387ac558.jpg' alt='cart' style={{height:10,width:10}}/></button></span>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;