import { ThumbsUp, Trash } from "phosphor-react";
import * as S from "./style";
import { Avatar } from "../Avatar/Avatar";
import { useState } from "react";

interface CommentProps {
  content: string;
  deleteComment: (comment: string) => void;
}

export function Comment({ content, deleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    deleteComment(content);
  }
  return (
    <S.Comment>
      <Avatar src="https://github.com/vcarvalho0.png" />

      <S.CommentBox>
        <S.CommentContent>
          <header>
            <S.AuthorAndTime>
              <strong>Vitor Carvalho</strong>
              <time
                title="Publicado 30 de Maio ás 13hrs"
                dateTime="2023-05-30 13:57:02"
              >
                Cerca de 1 hora atrás
              </time>
            </S.AuthorAndTime>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </S.CommentContent>
        <footer>
          <button onClick={() => setLikeCount(likeCount + 1)}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </S.CommentBox>
    </S.Comment>
  );
}
