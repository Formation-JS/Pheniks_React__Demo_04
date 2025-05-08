import customerService from '../../services/customer.service';
import { Link } from 'react-router';
import useSWR from 'swr';

export default function CustomerList_AutoLoading() {
  const { data : customers, isLoading, error } = useSWR('all_customer',() => customerService.getAll())

  return (
    <>
      {isLoading ? (
        <p>Chargement en cours...</p>
      ) : customers ? (
        <ul>
          {customers.map(customer => (
            <li>
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