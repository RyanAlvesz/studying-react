import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <span> Aquarela </span>
            <nav>
                <a href='#'> Home </a>
                <a href='#'> About </a>
            </nav>
        </header>
    )
}

export default Header;