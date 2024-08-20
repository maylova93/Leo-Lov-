import style from '../style/Section3.module.scss';
import Ellipse1 from '../assets/images/Ellipse 1.png';
import Ellipse2 from '../assets/images/Ellipse 2.png';
import Ellipse3 from '../assets/images/Ellipse 3.png';
import Ellipse4 from '../assets/images/Ellipse 4.png';

function Section3() {
  const teamMembers = [
    { img: Ellipse1, name: 'John Harbinger', quote: '“Jeg er den mest succesfulde advokat i firmaet. I hvert fald mere end Peter.”' },
    { img: Ellipse2, name: 'Peter Parker', quote: '“Jeg holder af kaffe og så er jeg helt enormt succesfuld. Meget mere end John.”' },
    { img: Ellipse3, name: 'Elise Li', quote: '“Uden ret og lov, kunne vi ligeså godt bo i en skov. Sådan har jeg altid sagt.”' },
    { img: Ellipse4, name: 'Morten Nate', quote: '“Jeg er født på landet. På landet er der ingen ret og lov. Det er det vilde vest derude.”' },
  ];

  return (
    <section id="section3"  className={style.meetTheTeam}>
      <h2>MØD HOLDET</h2>
      <div className={style.teamGrid}>
        {teamMembers.map((member, index) => (
          <div key={index} className={style.teamMember}>
            <img src={member.img} alt={member.name} className={style.teamImage} />
            <h3>{member.name}</h3>
            <p>{member.quote}</p>
            <div className={style.line}></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section3;
