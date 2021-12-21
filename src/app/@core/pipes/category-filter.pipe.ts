import { Pipe, PipeTransform } from '@angular/core';
import { CustomerService } from '../services/customers.service';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  constructor(private service:CustomerService) {}

  async transform(value: any, ...args: any[]): Promise<any> {
    const categories = await this.service.getCategories().toPromise();
    categories.find((category) => {
      if(category.id === value) {
        return value = category.nombre
      } else {
        return null;
      }
    })
    console.log('my console.log', categories, value)
  }

}
