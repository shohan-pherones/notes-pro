import { NoteData, Tag } from "../App";
import NoteForm from "./NoteForm";

type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  includedTags: Tag[];
};

const NewNote = ({ onSubmit, onAddTag, includedTags }: NewNoteProps) => {
  return (
    <>
      <h1 className="mb-5">New Note</h1>
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        includedTags={includedTags}
      />
    </>
  );
};

export default NewNote;
