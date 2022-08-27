import Product1 from '../../assets/img/card1.png'
import Product3 from '../../assets/img/card3.png'
import Product4 from '../../assets/img/card4.png'
import Product5 from '../../assets/img/card5.png'
import Product6 from '../../assets/img/card6.png'
import Product7 from '../../assets/img/card7.png'
import Product8 from '../../assets/img/card8.png'
import Product9 from '../../assets/img/card9.png'

import React from 'react';
import styles from '../../components/product/Product.css'
import Product from './productComponents/Product';
import ListOrder from './productComponents/ListOrder';
import {useState} from 'react'

function ProductContainer () {

      const [produtos, setProdutos] = useState([
        {
          id: 1,
          image: Product1,
          disc: 0,
          discount: '-40',
          group: 'FEMININO',
          description: 'Vestido Floral Verde Marinho',
          discounted: 'R$ 250',
          price: 'R$ 50',
        },
        {
            id: 2,
            image: Product3,
            disc: 1,
            group: 'MASCULINO',
            description: 'Moleton Casual OFF-WHITE',
            price: 'R$ 100',
        },
        {
            id: 3,
            image: Product4,
            disc: 0,
            discount: '-40',
            group: 'MASCULINO',
            description: 'Vestido Manga Bufante Rosa',
            discounted: 'R$ 250',
            price: 'R$ 100',
        },
        {
          id: 4,
          image: Product5,
          disc: 1,
          group: 'FEMININO',
          description: 'Camisa Social Zara',
          price: 'R$ 80',
      },
      {
        id: 5,
        image: Product6,
        disc: 0,
        discount: '-50',
        group: 'MASCULINO',
        description: 'Camisa Esporte Fino Preta',
        discounted: 'R$ 200',
        price: 'R$ 100',
    },
    {
      id: 6,
      image: Product7,
      disc: 1,
      group: 'MASCULINO',
      description: 'Camisa Social Preta',
      price: 'R$ 150',
    },
    {
      id: 5,
      image: Product8,
      disc: 0,
      discount: '-30',
      group: 'MASCULINO',
      description: 'Calça Social OFF-WHITE',
      discounted: 'R$ 270',
      price: 'R$ 160',
    },
    {
      id: 5,
      image: Product9,
      disc: 1,
      group: 'MASCULINO',
      description: 'Tenis Esportivo',
      price: 'R$ 60',
    },
  ])

    return (
      <>
        <section className="section all-products" id="products">
          <div className="top container">
            <h1>Todos os Produtos</h1>
            <ListOrder />
          </div>
          <div className="product-center container">
              {produtos.map(produto => (
                  <Product 
                    key={produto.id}
                    image={produto.image}
                    disc={produto.disc}
                    discount={produto.discount}
                    group={produto.group}
                    description={produto.description}
                    price={produto.price}
                    discounted={produto.discounted}/>
              ))}
          </div>
        </section>
      </>
    )
}

export default ProductContainer;