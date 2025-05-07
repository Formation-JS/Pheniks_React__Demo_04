import { Link } from 'react-router';
import CustomerList from '../../containers/Customer/CustomerListV1';

export default function CustomerListPage() {

  return (
    <>
      <h2>Liste des clients</h2>
      <Link to='add'>Ajouter</Link>

      <h3>Exemple</h3>
      <div>
        {/* Route absolue */}
        <Link to='/customer/42' >Client n°42</Link>
        <br />
        {/* Route relative */}
        <Link to='13' >Client n°13</Link>
      </div>

      <h3>Data</h3>
      <CustomerList />

    </>
  );
}