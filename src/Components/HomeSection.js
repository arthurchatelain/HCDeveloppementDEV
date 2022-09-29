import '../Assets/Style/Components/HomeSection.css'
import { ref, set } from "firebase/database";

export default function HomeSection (props) {

    function setText(name, text) {
        set(ref(props.database, 'Textes/' + name), text);
      }

    let source = props.source
    let text = props.text
    let title = props.title
    const image = require('../Assets/Images/' + props.image)
    return (

        <section>
            <img className='BackgroundImage' alt='ImageText' src={image}/>
            <div className='TextContainer'>
                <h3>{title}</h3>
                <p className='apparitionOpacity'><textarea onChange={ e => {
                    setText(source, e.target.value)
                }} id={source} name={source} wrap='hard'>{text}</textarea></p>
            </div>
        </section>
    )
}