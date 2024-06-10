import ProductService from "../Services/ProductService";
import Controller from "./Interface/InterfaceController";
import { ObjectId } from "mongodb";

class ProductController implements Controller {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  delete = async (request: any, response: any): Promise<void> => {
    try {
      const id: ObjectId = new ObjectId(request.params.id)
      const isDelete = this.productService.delete(id);
      if(isDelete){
        response.status(200).json(isDelete)
      }
    } catch (error: any) {
      response.status(400).json({ message: error.message })
    }
  }

  update = async (request: any, response: any): Promise<void> => {
    try {
      const id: ObjectId = new ObjectId(request.params.id)
      const isUpdate = this.productService.update(id, request.body)
      if(isUpdate){
        response.status(200).json(isUpdate)
      }
    } catch (error: any) {
      response.status(400).json({ message: error.message })
    }
  }

  register = async (request: any, response: any): Promise<void> => {
    try {
      const isProduct = await this.productService.find(request.body);
      if(isProduct){
        throw new Error('Esse produto já existe. Cadastre um novo para continuar');
      } 
      const product = await this.productService.add(request.body);
      if (product) {
        response.status(201).json(product);
      }
      
    } catch (error: any) {
      response.status(400).json({ message: error.message });
    }
  }
  
  listAll = async (request: any, response: any): Promise<void> => {
    try {
      const all = await this.productService.getAll()
      response.status(201).json(all)
    } catch (error: any) {
      response.status(400).json({ message: error.message })
    }
  }

  getOne = async (request: any, response: any): Promise<void> => {
    try {
      const getOne: Object = await this.productService.get(request.params.id);
      response.status(201).json(getOne);
    } catch (error: any) {
      response.status(400).json({ message: error.message });
    }
  }
}

export default ProductController