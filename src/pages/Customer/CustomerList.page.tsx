import { Link } from 'react-router';
import CustomerList from '../../containers/Customer/CustomerListV1';
import CustomerList_AutoLoading from '../../containers/Customer/CustomerListV2';

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
        <Link to='9' >Client n°9</Link>
      </div>

      <h3>Data - Load by button</h3>
      <CustomerList />
      
      <h3>Data - Auto loading</h3>
      <CustomerList_AutoLoading />

    </>
  );
}