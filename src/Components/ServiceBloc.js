import ServiceType from "./ServiceType"

export default function ServiceBloc (props) {

    return (

        <section className='ServiceBloc'>
            <h2>{props.title}</h2>
            <div className="ServiceTypeContainer">
                <ServiceType source={props.first.source} database={props.database} title={props.first.title} text={props.first.text} />
                <ServiceType source={props.second.source} database={props.database} title={props.second.title} text={props.second.text} />
            </div>
        </section>

    )
}