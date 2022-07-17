import Axios from 'axios'

//const url = 'http://localhost:8080/v1/'
const url = 'https://peaceful-earth-87778.herokuapp.com/v1'
const config = {
    headers: {
        'Content-Type': 'application/json',
    },
}

class NoteService {
    getNote(noteId?: string) {
        if (noteId) {
            return Axios.get(`${url}/note/${noteId}`, config)
        } else {
            return Axios.get(`${url}/note`, config)
        }
    }
}

export default new NoteService()
