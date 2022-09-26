import { useState } from "react"

export default function ContactLink (props) {

    let [isOpen, setOpen] = useState(false)

    return (

        <div className="ContactLinkContainer" onMouseEnter={() => setOpen(true)} onClick={() => setOpen(!isOpen)} onMouseLeave={() => setOpen(false)}>
            {isOpen ? 
                props.element
            :
            <><p className="ContactLink" style={{backgroundColor: props.backgroundColor, color: props.color}}>{props.ico}{props.name}</p></>
                
                
        
        }

        </div>

    )

}