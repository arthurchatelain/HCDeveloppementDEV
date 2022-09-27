import '../Assets/Style/Pages/Error.css'
import { Link } from 'react-router-dom'

export default function ErrorPage () {
    return (
        <div className="ErrorPage">
            <div className='ErrorTextContainer'>
                <div className='ErrorTextContainer2'>
                    <p className='ErrorText'>Erreur 404, Cette page n'existe pas</p>
                    <Link to='/Home' className='ErrorLink'>Retourner à la page d'accueil</Link>
                </div>
            </div>
        </div>
    )
}