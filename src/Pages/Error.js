import '../Assets/Style/Pages/Error.css'
import { Link } from 'react-router-dom'
import Erreur404 from '../Assets/Images/Erreur404'
import Header from '../Components/Header'

export default function ErrorPage () {
    return (
        <div className="ErrorPage">
            <Header pageActive='Error'/>
            <div className='svgErrorContainer'><Erreur404 /></div>
            <div className='ErrorTextContainer'>
                <div className='ErrorTextContainer2'>
                    <p className='ErrorText'>Cette page n'existe pas</p>
                    <Link to='/Home' className='ErrorLink'>Retourner à la page d'accueil</Link>
                </div>
            </div>
        </div>
    )
}