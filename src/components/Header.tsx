import toDoLogo from '../assets/to-do-logo.svg';

import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={toDoLogo} className={styles.toDoLogo} />
    </header>
  );
}
