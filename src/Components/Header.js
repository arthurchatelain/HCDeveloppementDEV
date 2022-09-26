import { Link } from 'react-router-dom'
import '../Assets/Style/Components/Header.css'
import { useState } from 'react'
import ContactLink from './ContactLink'
import { useRef } from 'react'
import useClickOutside from 'use-click-outside'

export default function Header (props) {

    const [isContactOpen, setContactOpen] = useState(false)

    const ref = useRef()
    useClickOutside(ref, () => setContactOpen(false))

    const contactLinkedin = <p className='ContactLink' style={{backgroundColor: 'rgb(6 63 119)', color: 'white', display: 'flex', justifyContent: 'center'}}><img alt='hugoChatelain' src={require('../Assets/Images/hugoprofil.jpg')}/><a href='https://fr.linkedin.com/in/hugo-chatelain-d%C3%A9veloppement'>Hugo Chatelain</a></p>
    const contactEmail = <p className='ContactLink' style={{backgroundColor: 'rgb(156 65 65)', color: 'white', display: 'flex', justifyContent: 'center'}}><a href='mailto:&#104;&#099;&#100;&#101;&#118;&#101;&#108;&#111;&#112;&#112;&#101;&#109;&#101;&#110;&#116;&#055;&#050;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;'>&#104;&#099;&#100;&#101;&#118;&#101;&#108;&#111;&#112;&#112;&#101;&#109;&#101;&#110;&#116;&#055;&#050;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;</a></p>
    const contactTel = <p className='ContactLink' style={{backgroundColor: 'rgb(0 79 54)', color: 'white', justifyContent: 'center'}}>&#048;&#054;&#032;&#054;&#049;&#032;&#052;&#051;&#032;&#051;&#052;&#032;&#054;&#055;</p>
    const icoLinkedin = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5 V37z"/><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364 c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274 L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479 C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"/><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677 c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638 c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001 c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"/><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12 c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698 c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19 c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"/></svg>
    const icoEmail = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#e0e0e0" d="M5.5,40.5h37c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11v26C2,38.933,3.567,40.5,5.5,40.5z"/><path fill="#d9d9d9" d="M26,40.5h16.5c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11L26,40.5z"/><path fill="#eee" d="M6.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L6.745,40.5z"/><path fill="#e0e0e0" d="M25.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L18.771,31.616L25.745,40.5z"/><path fill="#ca3737" d="M42.5,9.5h-37C3.567,9.5,2,9.067,2,11v26c0,1.933,1.567,3.5,3.5,3.5H7V12h34v28.5h1.5c1.933,0,3.5-1.567,3.5-3.5V11C46,9.067,44.433,9.5,42.5,9.5z"/><path fill="#f5f5f5" d="M42.5,7.5H24H5.5C3.567,7.5,2,9.036,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.036,44.433,7.5,42.5,7.5z"/><path fill="#e84f4b" d="M43.246,7.582L24,21L4.754,7.582C3.18,7.919,2,9.297,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.297,44.82,7.919,43.246,7.582z"/></svg>
    const icoTel = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#0f0" d="M13,42h22c3.866,0,7-3.134,7-7V13c0-3.866-3.134-7-7-7H13c-3.866,0-7,3.134-7,7v22 C6,38.866,9.134,42,13,42z"/><path fill="#fff" d="M35.45,31.041l-4.612-3.051c-0.563-0.341-1.267-0.347-1.836-0.017c0,0,0,0-1.978,1.153 c-0.265,0.154-0.52,0.183-0.726,0.145c-0.262-0.048-0.442-0.191-0.454-0.201c-1.087-0.797-2.357-1.852-3.711-3.205 c-1.353-1.353-2.408-2.623-3.205-3.711c-0.009-0.013-0.153-0.193-0.201-0.454c-0.037-0.206-0.009-0.46,0.145-0.726 c1.153-1.978,1.153-1.978,1.153-1.978c0.331-0.569,0.324-1.274-0.017-1.836l-3.051-4.612c-0.378-0.571-1.151-0.722-1.714-0.332 c0,0-1.445,0.989-1.922,1.325c-0.764,0.538-1.01,1.356-1.011,2.496c-0.002,1.604,1.38,6.629,7.201,12.45l0,0l0,0l0,0l0,0 c5.822,5.822,10.846,7.203,12.45,7.201c1.14-0.001,1.958-0.248,2.496-1.011c0.336-0.477,1.325-1.922,1.325-1.922 C36.172,32.192,36.022,31.419,35.45,31.041z"/></svg>

    return (

        <header className='Header'>
            <nav className='NavigationLinks'>
                <Link to='/Home' className={props.pageActive === 'Accueil' ? 'white' : ''}>Accueil</Link>
                <Link to='/Services' className={props.pageActive === 'Services' ? 'white' : ''} >Services</Link>
            </nav>
            <div className='Contact' ref={ref} onClick={() => setContactOpen(!isContactOpen)}>Contact</div>

            {isContactOpen ?

                <div className='ContactModal' onMouseLeave={() => setContactOpen(false)}>
                    <ContactLink name='Linkedin' element={contactLinkedin} backgroundColor='#0a66c2' color='white' ico={icoLinkedin}/>
                    <ContactLink name='Email' element={contactEmail} backgroundColor='rgb(255 123 123)' color='white' ico={icoEmail}/>
                    <ContactLink name='Téléphone' element={contactTel} backgroundColor='rgb(0 143 98)' color='white' ico={icoTel}/>
                </div> 
                
                : false}

        </header>

    )
}