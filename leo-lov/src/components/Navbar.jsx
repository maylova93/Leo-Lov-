import style from '../style/Navbar.module.scss'

function Navbar(){
    return(
<nav className={style.navStyle}>
    <ul>
    <li><a href="#header" className={style.linkStyle}>Hjem</a></li>
                <li><a href="#section" className={style.linkStyle}>Advokaterne</a></li>
                <li><a href="#section2" className={style.linkStyle}>Om LeoLov</a></li>
                <li><a href="#section3" className={style.linkStyle}>Kontakt</a></li>
    </ul>
    <div className={style.logo}>
        <a href="#header">
        <span>Leo</span><span>-Lov</span>
     </a>
    </div>
</nav>
    )
}
export default Navbar
