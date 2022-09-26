import ServiceType from "./ServiceType"

export default function ServiceBloc (props) {

    return (

        <section className='ServiceBloc'>
            <h2>{props.title}</h2>
            <div className="ServiceTypeContainer">
                <ServiceType title={props.first.title} text={props.first.text} />
                <ServiceType title={props.second.title} text={props.second.text} />
            </div>
        </section>

    )
}