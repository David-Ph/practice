import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "i1",
    price: 6,
    title: "My first book",
    description: "my first book i ever wrote",
  },
  {
    id: "i2",
    price: 2,
    title: "My second book",
    description: "my second book i ever wrote",
  },
  {
    id: "i3",
    price: 4,
    title: "My third book",
    description: "my third book i ever wrote",
  },
  {
    id: "i4",
    price: 5,
    title: "My fourth book",
    description: "my fourth book i ever wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => {
          return (
            <ProductItem
              id={product.id}
              key={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
