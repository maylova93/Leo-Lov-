import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
import {Card, CardContainer} from './components/Card'
import Section from './components/Section'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'


function App() {
  return (
    <>
 <Navbar/>
 <Header/>
 <CardContainer>
        <Card
          title="Familieret"
          text="Familieret er en ret alle har. Har du en familie har du sikkert ret til familieret. Medmindre du altid er den der tror du har ret. Så kan vi desværre ikke hjælpe dig."
        />
        <Card
          title="Ejendomsret"
          text="Har du købt et hus og fortrudt eller er du blevet svindlet? Fortvivl ej. Vi kan hjælpe dig med at komme af med huset, eller eventuelt sagsøge vedkommende der solgte dig det."
        />
        <Card
          title="Konkurs"
          text="Er du gået konkurs ville vi rigtig gerne hjælpe, men det kan vi desværre ikke. Vi er alle advokater med fede biler her så har du ingen penge får du ingen hjælp."
        />
        <Card
          title="Selskabsret"
          text="Selskabsret. Ved du heller aldrig hvilken ret du skal servere til et stort selskab? Heller ikke os. Heldigvis har vi en mand i udlandet der ved en masse om dette så henvend dig i dag."
        />
 </CardContainer>
 <Section/>
 <Section2/>
 <Section3/>
 <Section4/>
 <Footer/>
    </>
  )
}

export default App
