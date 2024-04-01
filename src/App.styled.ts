import styled from 'styled-components';

export const Layout = styled.main`
  padding: 10px;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 100vw;
  min-height: 100vh;
  width: 100%;
  height: 100vh;

  overflow: hidden;

  background: linear-gradient(328deg, #477359, #406d6d, #6b4357, #676840);
  background-size: 800% 800%;

  -webkit-animation: AnimationName 26s ease infinite;
  -moz-animation: AnimationName 26s ease infinite;
  animation: AnimationName 26s ease infinite;

  @keyframes AnimationName {
    0%{background-position:0% 94%}
    50%{background-position:100% 7%}
    100%{background-position:0% 94%}
  }
`;


export const CenteredBlock = styled.div`
  display: flex;
`;

export const Actions = styled.ol`
  z-index: 10;

  position: fixed;
  left: 0;
  top: 0;

  padding: 8px;


  display: flex;

  & > li {
    &:not(:last-child) {
      margin-right: 10px;
    }


    &:hover {
      cursor: pointer;

      transform: scale(1.1);
    };


  }


  background-color: #cecece;
`;


export const History = styled.div<{$isOpened: boolean}>`
  z-index: 10;

  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;

  padding-top: 34px;

  width: 300px;
  height: 100%;
  max-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  background-color: #cecece;

  transform: translateX(100%);

  &:hover {
    transform: translateX(0);
  };

  transition: all 300ms ease;

`;

export const HistoryList = styled.ol`
  padding: 10px;
  width: 100%;

  & > li {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  overflow-y: auto;
`;

export const HistoryItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const HistoryTags = styled.ol`
  display: flex;

  & > li {
    font-size: 12px;

    &:not(:last-child) {
      display: inline;
      margin-right: 10px;
    }

    &:before {
     content: "#";
    };

    text-decoration: underline;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    };
  }
`;

export const HistoryToggler = styled.span`

  position: absolute;
  top: 0;
  bottom: 0;
  left: -20px;

  height: 20px;
  width: 20px;

  text-align: center;


  cursor: pointer;

  background-color: #cecece;

`;

export const HistoryReset = styled.div`
  height: 34px;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  padding: 8px;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

`;
