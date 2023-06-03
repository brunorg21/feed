import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import * as S from "./style";
import { FormEvent, useState } from "react";

interface Comment {
  type: string;
  content: string;
}
interface PostProps {
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  };
  publishedAt: Date;
  content: Comment[];
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState(["Post muito bacana, hein?!"]);
  const [newComment, setNewComment] = useState("");

  const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCreateNewComment = (e: FormEvent) => {
    e.preventDefault();

    setComments([...comments, newComment]);
    setNewComment("");
  };

  const deleteComment = (commentToDelete: string) => {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeletedOne);
  };

  return (
    <S.PostContainer>
      <header>
        <S.Author>
          <Avatar src={author.avatarUrl} />
          <S.AuthorInfo>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </S.AuthorInfo>
        </S.Author>

        <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <S.Content>
        {content.map((content) => {
          if (content.type === "paragraph") {
            return <p key={content.content}>{content.content}</p>;
          } else if (content.type === "link") {
            return (
              <p key={content.content}>
                <a href="">{content.content}</a>
              </p>
            );
          }
        })}
      </S.Content>

      <S.CommentForm onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>

        <textarea
          onChange={(e) => setNewComment(e.target.value)}
          value={newComment}
          placeholder="Deixe seu comentário"
          required
        />

        <footer>
          <button type="submit" disabled={newComment.length === 0}>
            Publicar
          </button>
        </footer>
      </S.CommentForm>

      <S.CommentList>
        {comments.map((comment, index) => {
          return (
            <Comment
              deleteComment={deleteComment}
              key={index}
              content={comment}
            />
          );
        })}
      </S.CommentList>
    </S.PostContainer>
  );
}
