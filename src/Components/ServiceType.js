import { ref, set } from "firebase/database";

export default function ServiceType (props) {

    function setText(name, text) {
        set(ref(props.database, 'Textes/' + name), text);
      }

    return (
        <div className="ServiceType">
            <h3>{props.title}</h3>
            <p className="apparitionOpacity"><textarea onChange={ e => setText(props.source, e.target.value)}>{props.text}</textarea></p>
        </div>
    )

}