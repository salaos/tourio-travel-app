import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  background-color: yellowgreen;
  padding: 0.8rem;
  border-radius: 0.6rem;
  color: black;
  text-decoration: none;
  font-weight: bold;
  border: none;
  font-size: inherit;
  box-shadow: 0 1px 5px lightgrey;

  ${({ variant }) =>
    variant === "delete" &&
    css`
      background-color: firebrick;
      color: white;
    `}
`;
