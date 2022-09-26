import '../Assets/Style/Pages/Home.css'
import Header from '../Components/Header'
import HomeSection from '../Components/HomeSection'
import { philosophie, competences, prestations, finalite } from '../Assets/Texte/Texte'

export default function Home () {

    return (
        <div className="Home">
            <Header pageActive='Accueil'/>
            <main className='mainContent'>
                <p className='logo'>hcdeveloppement</p>
                <h1>CONSEILS ET OUTILS REDACTIONNELS</h1>
                <h2>Au service des clubs sportifs et du tissu associatif</h2>
                <div className='Sections'>
                    <HomeSection title='Une philosophie' text={philosophie} image={'philosophie.jpg'}/>
                    <HomeSection title='Des compétences' text={competences} image={'competences.jpg'}/>
                    <HomeSection title='Des prestations appropriées' text={prestations} image={'prestations.jpg'}/>
                    <HomeSection title='Une finalité sociale et solidaire' text={finalite} image={'finalite.jpg'}/>
                </div>
            </main>
        </div>
    )
}