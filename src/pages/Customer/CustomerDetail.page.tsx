import { Link, useParams } from 'react-router';
import CustomerDetail from '../../containers/Customer/CustomerDetail';

export default function CustomerDetailPage() {

  const { id } = useParams();
  console.log(id);

  const customerId = parseInt(id!);

  return (
    <>
      <h2>Detail du client {id}</h2>
      <CustomerDetail id={customerId} />
      <Link to={'/customer'}>Retour à la liste</Link>
    </>
  );
}