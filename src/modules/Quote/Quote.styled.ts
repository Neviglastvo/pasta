import styled from 'styled-components';

export const Quote = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const Text = styled.h1`
  font-size: 36px;

  text-align: center;

  margin-bottom: 34px;

  color: #eee;

  &:hover {
    cursor: pointer;

  };

  &:active  {
    transform: scale(0.8);

  };
  transform: scale(1);

  transition: all 80ms ease;

`;

export const Tags = styled.ul`
  display: flex;
  align-items: center;

  & > li {
    color: #eee;

    &:not(:last-child) {
      display: inline;

      margin-right: 10px;
    }

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    };

    &:before {
     content: "#";
    };
  }


`;
