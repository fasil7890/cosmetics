import React from 'react';
import './Products.css';
import Card from '../Card/Card';
import cosmetic1 from '../../assets/cosmetic1.png';
import cosmetic2 from '../../assets/cosmetic2.png';
import { motion } from 'framer-motion';
import cosmetic3 from '../../assets/cosmetic3.png';

const Products = () => {
  const transition = { duration: 4, type: 'spring' };
  return (
    <div className="products container">
      {/* left side */}
      <div className="awesome">
        <span className="products-title-1">Our Awesome</span>
        <span className="products-title-2">Products</span>
        <span className="products-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Facere
          dolor commodi dolorem rerum eos repudiandae, <br /> illo reiciendis
          laudantium aspernatur iusto totam
        </span>
      </div>
      {/* right side */}
      <div className="cards">
        <div>
          <Card
            image={cosmetic1}
            title="Makeup Sets"
            text="Cosmetics Lipstick Make-up artist graphy"
          />
        </div>
        {/* Second Crad */}
        <div>
          <Card
            image={cosmetic2}
            title={'Face Cream'}
            text={'Cream container, Cosmetics Sunscreen Cream'}
          />
        </div>

        <div>
          <Card
            image={cosmetic3}
            title={'Lpistick'}
            text={'Cream container, Cosmetics Sunscreen Cream'}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
