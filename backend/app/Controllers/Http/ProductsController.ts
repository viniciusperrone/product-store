import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Product from 'App/Models/Product';

export default class ProductsController {
  public async index(){
    const all = await Product.all();

    return all;
  }
  public async create({ request }: HttpContextContract){
    const data = request.only(["name", "description", "price"]);

    const product = await Product.create({
      name: data.name,
      description: data.description,
      price: data.price
    });

    return product;
  }
}