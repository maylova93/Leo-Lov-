import style from '../style/Header.module.scss';
import headerImage from '../assets/images/Header.png'; 
function Header() {
    return (
        <div className={style.headerContainer}>
            <img src={headerImage} alt="header" className={style.headerImage} />
        </div>
    );
}
export default Header;
