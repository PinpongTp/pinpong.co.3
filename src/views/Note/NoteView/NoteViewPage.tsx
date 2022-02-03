import note from '../../../store/note.json'
import { useParams } from 'react-router-dom'

function NoteViewPage() {
    let { noteView } = useParams()
    let noteContent = ''
    let noteTitle = ''
    note.forEach((value, key) => {
        if (value.url == noteView) {
            noteContent = value.content
            noteTitle = value.title
        }
    })

    return (
        <>
            <h1>{noteTitle}</h1>
            <div>{noteContent}</div>
        </>
    )
}

export default NoteViewPage
