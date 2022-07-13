import '../Assets/Style/Pages/Error.css'
import { Link } from 'react-router-dom'
import Erreur404 from '../Assets/Images/Erreur404'

export default function Error () {
    return (
        <div className="ErrorPage">
            <div className='ErrorLogoContainer'><img className="ErrorLogo" src={require("../Assets/Images/logo.png")} alt="HC Logo"/></div>
            <div className='svgErrorContainer'><Erreur404 /></div>
            <div className='ErrorTextContainer'>
                <div className='ErrorTextContainer2'>
                    <p className='ErrorText'>Cette page n'éxiste pas</p>
                    <Link to='/Home' className='ErrorLink'>Retourner à la page d'accueil</Link>
                </div>
            </div>
        </div>
    )
}