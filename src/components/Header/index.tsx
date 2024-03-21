import Logo from '../Logo';
import styles from './index.module.css';

const Header = () => {
	return (
		<header className={styles.header}>
			<Logo fill='white' />
		</header>
	);
};

export default Header;
