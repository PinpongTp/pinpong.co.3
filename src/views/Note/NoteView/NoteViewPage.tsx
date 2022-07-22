import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NoteService from '../../../services/note-service/note-service';
import ReactMarkdown from 'react-markdown';

function NoteViewPage() {
  const { noteView } = useParams();
  const [note, setNote] = useState(Object);

  useEffect(() => {
    if (noteView) {
      NoteService.getNote(noteView)
        .then((res) => {
          res.data.content = JSON.parse(res.data.content);
          setNote(res.data);
          console.log(res.data);
        })
        .catch((err) => console.error(err));
    }
  }, [noteView]);

  return (
    <>
      <h2>{note.title}</h2>
      <ReactMarkdown>{note.content}</ReactMarkdown>
    </>
  );
}

export default NoteViewPage;
