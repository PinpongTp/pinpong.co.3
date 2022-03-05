import Axios from "axios";
import { resolve } from "path/posix";


const url = 'http://localhost:3002'
const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

class NoteService {
    constructor() {
    }

    // const API_URL = configData.API_URL + '/note';
    
    getNote(noteId?: string) {
        if(noteId) {
            return Axios.get(`${url}/note/data/${noteId}`)
        }else {
            return Axios.get(`${url}/note/list`, config)
        }
    }

}

export default new NoteService();