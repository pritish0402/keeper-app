import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

export default function CreateArea(props) {
  const [note, updateNote] = useState({
    title: "",
    content: ""
  });

  const [isExpanded, setIsExpanded] = useState(false);
  
  function changeNote(event) {
    const name = event.target.name;
    const value = event.target.value;

    updateNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function expand() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && <input name="title" placeholder="Title" value={note.title} onChange={changeNote} />}
        <textarea name="content" placeholder="Take a note..." rows={isExpanded ? 3: 1} value={note.content} onChange={changeNote} onClick={expand} />
        {isExpanded && <Zoom in={true}>
          <Fab onClick={(event) => {
            props.onSubmit(note);
            updateNote({
              title: "",
              content: ""
            });
            event.preventDefault();
          }}><AddIcon /></Fab>
        </Zoom>}
      </form>
    </div>
  );
}
