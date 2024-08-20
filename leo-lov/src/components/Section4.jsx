import style from '../style/Section4.module.scss';
import MapImage from '../assets/images/maldive.rd.22-seychelle 1.png'; 

function Section4() {
    return (
        <section id="section4"  className={style.mapSection}>
            <div className={style.imageWrapper}>
                <img src={MapImage} alt="Map" className={style.mapImage} />
            </div>
            <div className={style.textWrapper}>
                <h2>HER BOR VI</h2>
                <p>Vi har valgt at bosætte os i solen!</p>
                <p>Her er dejlig varmt og ikke ret mange fattige mennesker. Det nyder vi rigtig meget.</p>
                <p>“Hvis du har råd til at tage til Sechellerne har du råd til os”. Det er et af vores utallige motto´er.</p>             
            </div>
        </section>
    );
}

export default Section4;
