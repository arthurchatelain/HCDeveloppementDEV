import '../Assets/Style/Pages/Services.css'
import Header from '../Components/Header'
import ServiceBloc from '../Components/ServiceBloc'

export default function Services () {

    let defaultText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec metus tortor, finibus non metus nec, vestibulum pulvinar tortor. Proin iaculis mi ipsum, eu dictum lectus ultricies quis. Phasellus sit amet lectus iaculis, mollis massa et, tincidunt ex. Suspendisse id purus id nisi consectetur ornare.'

    return (
        <div className="Services" >
            <Header pageActive='Services'/>
            <main className='mainServices'>
                <div className='ServicePresentation'>
                    <h1 className='apparitionOpacity'>Je suis Hugo Chatelain et je peux vous aider dans la rédaction de différents types de service, allant de l’humain au financier. Vous trouverez ci-dessous plus d’informations. N’hésitez pas à me contacter pour plus d’information ou demander un contrat</h1>
                </div>
                <div className='AllServices'>
                    <ServiceBloc title='Développement financier' first={{title: 'Supports', text: defaultText}} second={{title: 'Démarchage', text: defaultText}}/>
                    <ServiceBloc title='Développement structurel' first={{title: 'Diagnostics', text: defaultText}} second={{title: 'Aides', text: defaultText}}/>
                    <ServiceBloc title='Développement humain' first={{title: 'Recrutement', text: defaultText}} second={{title: 'Accueil', text: defaultText}}/>
                    <ServiceBloc title='Développement social' first={{title: 'Actions', text: defaultText}} second={{title: 'Regroupement', text: defaultText}}/>
                </div>
            </main>
        </div>
    )
}