import { Badge, Card, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Tag } from "../App";
import styles from "../styles/NoteList.module.css";

export type SimplifiedNote = {
  tags: Tag[];
  title: string;
  id: string;
};

const NoteCard = ({ id, title, tags }: SimplifiedNote) => {
  return (
    <Card
      as={Link}
      to={`/${id}`}
      className={`h-100 text-reset text-decoration-none ${styles.card}`}
    >
      <Card.Body>
        <Stack className="h-100" gap={1}>
          <p className="fs-5">{title}</p>
          {tags.length > 0 && (
            <Stack gap={2} className="flex-wrap" direction="horizontal">
              {tags.map((tag) => (
                <Badge key={tag.id} className="text-truncate">
                  {tag.label}
                </Badge>
              ))}
            </Stack>
          )}
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default NoteCard;
