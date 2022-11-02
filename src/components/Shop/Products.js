import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6.99,
    title: 'My First Book',
    description: 'The first book I ever wrote',
  },
  {
    id: 'p2',
    price: 7.99,
    title: 'The Truth',
    description: 'All I am selling is the truth',
  },
  {
    id: 'p3',
    price: 9.99,
    title: 'My Third Product',
    description: 'Third time the charm',
  },
  {
    id: 'p4',
    price: 8.99,
    title: 'Air',
    description: 'A bag of air',
  },
  {
    id: 'p5',
    price: 49.99,
    title: 'Cactus Jack',
    description: 'selling a Cactus named Jack',
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
       {DUMMY_PRODUCTS.map((product) => (
         <ProductItem
         key={product.id}
         id={product.id}
         title={product.title}
         price={product.price}
         description={product.description}
       />
       ))}
      </ul>
    </section>
  );
};

export default Products;
