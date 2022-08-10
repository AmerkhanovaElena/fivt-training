import styles from './Header.module.css';
import NavBar from './NavBar';

const Header = () => {
    return (
        <header className={`${styles.header}`}>
            <NavBar />
        </header>
    );
}

export default Header;