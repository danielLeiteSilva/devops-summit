import AbstractService from "./Abstract/AbstractService";

class ProductService extends AbstractService{
  constructor() {
    super(process.env.COLLECTION);
  }
}

export default ProductService;