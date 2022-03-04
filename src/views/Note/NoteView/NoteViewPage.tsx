import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import NoteService from '../../../services/note-service/note-service'

function NoteViewPage() {
    const { noteView } = useParams()
    const [note, setNote] = useState(Object)

    useEffect(() => {
        if (noteView) {
            NoteService.getNote(noteView)
                .then((res) => {
                    setNote(res.data)
                    console.log(res.data)
                })
                .catch((err) => console.error(err))
        }
    }, [])

    return (
        <>
            <h1>{note.title}</h1>
            <div>{note.subtitle}</div>
        </>
    )
}

export default NoteViewPage
