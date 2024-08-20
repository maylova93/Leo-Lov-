import style from '../style/Section.module.scss';
import Img1 from '../assets/images/man1.png'; 

function Section() {
  return (
    <section className={style.gallery}>
      <div className={style.imageWrapper}>
        <img src={Img1} alt="img1" className={style.sectionImage} />
      </div>
      <div className={style.gal}>
        <h3>INTET PROBLEM</h3>
        <p className={style.galleryText}>
          Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle opleve at støde på et retsligt problem, som Leo-lov ikke kan løse, får du halvdelen af beløbet igen.
        </p>
        <p className={style.galleryText}>
          Det er sådan, vi har skabt en forretning, der ikke kan andet end at vokse!
        </p>
      </div>
    </section>
  );
}

export default Section;
