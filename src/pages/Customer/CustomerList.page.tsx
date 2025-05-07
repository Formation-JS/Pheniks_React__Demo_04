import { Link } from 'react-router';

export default function CustomerListPage() {

  return (
    <>
      <h2>Liste des clients</h2>
      <Link to='add'>Ajouter</Link>

      <div>
        {/* Route absolue */}
        <Link to='/customer/42' >Client n°42</Link>
        <br />
        {/* Route relative */}
        <Link to='13' >Client n°13</Link>
      </div>

    </>
  );
}