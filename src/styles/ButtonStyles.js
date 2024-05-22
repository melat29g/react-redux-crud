import { css } from '@emotion/react';

export const buttonStyles = css`
  background-color: gray;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darkgray;
  }
`;