import '../Assets/Style/Components/HomeSection.css'

export default function HomeSection (props) {

    let text = props.text
    let title = props.title
    const image = require('../Assets/Images/' + props.image)

    console.log(image)

    if ((typeof text) == 'string') {
        return (

            <section>
                <img className='BackgroundImage' alt='ImageText' src={image}/>
                <div className='TextContainer'>
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            </section>
        )
    } else {
        return (
            <section>
                <img className='BackgroundImage' alt='ImageText' src={image}/>
                <div className='TextContainer'>
                    <h3>{title}</h3>
                    <p>{text[0]}</p>
                    <p>{text[1]}</p>
                </div>
            </section>
        )
    }
}