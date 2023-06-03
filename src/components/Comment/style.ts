import styled from "styled-components";

export const Comment = styled.div `
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;

  > img {
    width: 3rem;
    height: 3rem;
    border-radius: 8px;
  }
`

export const CommentBox = styled.div `
  flex: 1;

  footer {
    margin-top: 1rem;
  }


  footer button {
    background: transparent;
    border: 0;
    color: var(--gray-400);
    cursor: pointer;

    display: flex;
    align-items: center;

    &:hover {
      color: var(--green-300);
    }
  }

  footer button svg {
    margin-right: 0.5rem;
  }

  footer button span::before {
    content: "•";
    padding: 0 0.25rem;
  }

`

export const CommentContent = styled.div `
  background-color: var(--gray-700);
  border-radius: 8px;
  padding: 1rem;

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  header button {
    background: transparent;
    border: 0;
    color: var(--gray-400);
    cursor: pointer;

    &:hover {
      color: var(--red-500);
      transition: 1.2s;
    }
  }
  p {
    margin-top: 1rem;
    color: var(--gray-300);
  }
`

export const AuthorAndTime = styled.div `
  display: flex;
  flex-direction: column;

  strong {
    font-size: 0.875rem;
    line-height: 1.6;
  }

  time {
    font-size: 0.75rem;
    line-height: 1.6;
    color: var(--gray-400);
  }
`