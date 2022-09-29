import '../Assets/Style/Pages/Services.css'
import Header from '../Components/Header'
import ServiceBloc from '../Components/ServiceBloc'
import { set, ref } from 'firebase/database'


export default function Services (props) {

    const textes = props.textes

    function setText(name, text) {
        set(ref(props.database, 'Textes/' + name), text);
    }

    return (
        <div className="Services" >
            <Header pageActive='Services'/>
            <main className='mainServices'>
                <div className='ServicePresentation'>
                    <h1 className='apparitionOpacity'><textarea onChange={e => setText('serviceintro', e.target.value)}>{textes.serviceintro}</textarea></h1>
                </div>
                <div className='AllServices'>
                    <ServiceBloc database={props.database} title='Développement financier' first={{title: 'Supports', text: textes.supports, source: 'supports'}} second={{title: 'Démarchage', text: textes.demarchage, source: 'demarchage'}}/>
                    <ServiceBloc database={props.database} title='Développement structurel' first={{title: 'Diagnostics', text: textes.diagnostics, source: 'diagnostics'}} second={{title: 'Aides', text: textes.aides, source: 'aides'}}/>
                    <ServiceBloc database={props.database} title='Développement humain' first={{title: 'Recrutement', text: textes.recrutement, source: 'recrutement'}} second={{title: 'Accueil', text: textes.accueil, source: 'accueil'}}/>
                    <ServiceBloc database={props.database} title='Développement social' first={{title: 'Actions', text: textes.actions, source:'actions'}} second={{title: 'Regroupement', text: textes.regroupement, source: 'regroupement'}}/>
                </div>
            </main>
        </div>
    )
}