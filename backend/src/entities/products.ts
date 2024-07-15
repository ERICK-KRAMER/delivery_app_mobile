interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

class Product {
  public name: string;
  public price: number;
  public description: string;
  public id: number;
  public image: string;
  public category: string;

  constructor(props: ProductProps) {
    Object.assign(this, props);
  }
}

export { Product };
