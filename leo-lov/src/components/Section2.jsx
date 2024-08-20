
import style from '../style/Section2.module.scss';
import Img2 from '../assets/images/man2.png'; 
function Section2() {
  return (
    <section id="section2" className={style.section2Container}>
      <div className={style.gal2}>
        <h3 className={style.section2Title}>HER BOR VI</h3>
        <p className={style.section2Text}>
          Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle opleve at støde på et retsligt problem, som Leo-lov ikke kan løse, får du halvdelen af beløbet igen.
        </p>
        <p className={style.section2Text}>
          Det er sådan, vi har skabt en forretning, der ikke kan andet end at vokse!
        </p>
      </div>
      <div className={style.imageWrapper2}>
        <img src={Img2} alt="img2" className={style.section2Image} />
      </div>
    </section>
  );
}

export default Section2;
