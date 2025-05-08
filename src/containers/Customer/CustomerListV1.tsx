import { useState } from 'react';
import type { Customer } from '../../@types/customer';
import customerService from '../../services/customer.service';
import { Link } from 'react-router';

export default function CustomerList() {

  const [customers, setCustomers] = useState<Customer[] | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLoadCustomer = () => {
    setLoading(true);

    customerService.getAll()
      .then((data) => {
        setCustomers(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Une erreur s\'est produite');
        setLoading(false);
      })
  }

  return (
    <>
      <button onClick={handleLoadCustomer}>Charger la liste</button>
      {isLoading ? (
        <p>Chargement en cours...</p>
      ) : customers ? (
        <ul>
          {customers.map(customer => (
            <li key={customer.id}>
              {customer.email} <Link to={customer.id.toString()}>Detail</Link>
            </li>
          ))}
        </ul>
      ) : error && (
        <p>{error}</p>
      )}
    </>
  )

}