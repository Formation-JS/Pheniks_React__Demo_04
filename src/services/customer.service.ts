import axios from 'axios';
import type { Customer } from '../@types/customer';
import { fakeLatence } from '../tools/debug.tools';

type CustomerRequest =  {
  id: number,
  email: string,
  birth_date: string | null,
  is_active: boolean
};

const customerService = {

  getAll: async () : Promise<Customer[]> => {
    const result = await axios.get<CustomerRequest[]>('http://localhost:4002/customer/?is_active=true');

    await fakeLatence(1_500);

    return result.data.map(customer => ({
      id: customer.id,
      email: customer.email,
      birthdate: !!customer.birth_date ? new Date(customer.birth_date) : null
    }));
  }

};

export default customerService;