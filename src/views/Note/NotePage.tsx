import { Link } from "react-router-dom"
import note from "../../store/note.json"
import { v4 as uuidv4 } from 'uuid'

function NotePage() {

    return (
        <>
            {/* <h3>Note</h3> */}
            <ul>
                { note.map((n) => {
                    return (<li key={uuidv4()}><Link to={'/note/' + n.url}>{n.title}</Link></li>)
                })}
                {/* <li><Link to="note/01">this is my first note. <small>(01/05/2022)</small></Link></li> */}
            </ul>

            <div></div>
        </>
    )
}

export default NotePage
