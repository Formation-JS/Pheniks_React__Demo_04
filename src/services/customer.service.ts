import axios from 'axios';
import type { Customer } from '../@types/customer';

type CustomerRequest =  {
  id: number,
  email: string,
  birth_date: string | null,
  is_active: boolean
};

const customerService = {

  getAll: async () : Promise<Customer[]> => {
    const result = await axios.get<CustomerRequest[]>('http://localhost:4002/customer/?is_active=true');

    return result.data.map(customer => ({
      id: customer.id,
      email: customer.email,
      birthdate: !!customer.birth_date ? new Date(customer.birth_date) : null
    }));
  }

};

export default customerService;