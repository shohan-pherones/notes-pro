import { NoteData, Tag } from "../App";
import { useNote } from "../hooks/useNote";
import NoteForm from "./NoteForm";

type EditNoteProps = {
  onSubmit: (id: string, data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  includedTags: Tag[];
};

const EditNote = ({ onSubmit, onAddTag, includedTags }: EditNoteProps) => {
  const note = useNote();

  return (
    <>
      <h1 className="mb-5">Edit Note</h1>
      <NoteForm
        title={note.title}
        markdown={note.markdown}
        tags={note.tags}
        onSubmit={(data) => onSubmit(note.id, data)}
        onAddTag={onAddTag}
        includedTags={includedTags}
      />
    </>
  );
};

export default EditNote;
