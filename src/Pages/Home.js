import '../Assets/Style/Pages/Home.css'
import Header from '../Components/Header'
import HomeSection from '../Components/HomeSection'

export default function Home (props) {

    const textes = props.textes

    return (
        <div className="Home">
            <Header pageActive='Accueil'/>
            <main className='mainContent'>
                <p className='logo'>hcdeveloppement</p>
                <h1>CONSEILS ET OUTILS REDACTIONNELS</h1>
                <h2>Au service des clubs sportifs et du tissu associatif</h2>
                <div className='Sections'>
                    <HomeSection database={props.database} title='Une philosophie' source='philosophie' text={textes.philosophie} image={'philosophie.jpg'}/>
                    <HomeSection database={props.database} title='Des compétences' source='competences' text={textes.competences} image={'competences.jpg'}/>
                    <HomeSection database={props.database} title='Des prestations appropriées' source='prestations' text={textes.prestations} image={'prestations.jpg'}/>
                    <HomeSection database={props.database} title='Une finalité sociale et solidaire' source='finalite' text={textes.finalite} image={'finalite.jpg'}/>
                </div>
            </main>
        </div>
    )
}