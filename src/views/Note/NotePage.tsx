import { Link } from "react-router-dom"
// import note from "../../store/note.json"
import { v4 as uuidv4 } from 'uuid'
import NoteService from "../../services/note-service/note-service"
import { useEffect, useState } from "react"
function NotePage() {

    const [noteList, setNoteList] = useState([])

    

    useEffect(() => {

        NoteService.getNote().then(res => {
            setNoteList(res.data)
            console.log(res.data)
        }).catch(err => console.error(err))

    }, [])


    return (
        <>
            {/* <h3>Note</h3> */}
            <ul>
                { noteList.map((n) => {
                    console.log(n)

                    return (<li key={uuidv4()}><Link to={'/note/' + n['id']}>{n['title']}</Link></li>)
                })}
                {/* <li><Link to="note/01">this is my first note. <small>(01/05/2022)</small></Link></li> */}
            </ul>

            <div></div>
        </>
    )
}

export default NotePage
