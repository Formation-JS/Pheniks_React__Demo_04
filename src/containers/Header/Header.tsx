import { Link, NavLink } from 'react-router';
import style from './Header.module.css';

export default function Header() {
  return (
    <header className={style.header}>
      <span>Phéniks</span>
      <HeaderNav />
    </header>
  );
}

const links = [
  { path: '/', name: 'Accueil' },
  { path: '/customer', name: 'Client' },
  { path: '/about', name: 'A propos' },
];

function HeaderNav() {
  return (
    <nav className={style.nav}>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <NavLink to={link.path} className={({isActive}) => isActive ? style.active : ''}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
