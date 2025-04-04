import Image from 'next/image';
import Link from 'next/link';
import NavLink from '../../components/nav-link/nav-link';
import logoImage from '../../assets/logo.png';
import styles from './main-header.module.css';

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <Image 
          src={logoImage} 
          alt="A plate with food on it" 
          priority
        />
        NextLevel Food
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink href="/meals">Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
