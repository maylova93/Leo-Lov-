import styles from '../style/Footer.module.scss';

function Footer() {
    return (
        <footer className={styles.main_footer}>
            <div className={styles.footerSection}>
                <h2>Adresse</h2>
                <h3>Find os her:</h3>
                <p>Vestervænget 232, 30.sal</p>
                <p>6574 Øster Nørup</p>
                <p>Danmark</p>
            </div>
            <div className={styles.footerSection}>
                <h2>Kontakt</h2>
                <h3>Kontakt os her:</h3>
                <p>email@mail.dk</p>
                <p>Tlf: 0192 3023</p>
            </div>
            <div className={styles.footerSection}>
                <h2>Politik</h2>
                <h3>Vores politikker:</h3>
                <p>Privatlivspolitik</p>
                <p>Cookiepolitik</p>
                <p>Generelle betingelse</p>
            </div>
            <div className={styles.footerSection}>
                <h2>Sociale medier</h2>
                <div className={styles.icons}>
                    <img src="..//src/assets/images/facebook.png" alt="Facebook" />
                    <img src="..//src/assets/images/social.png" alt="LinkedIn" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
