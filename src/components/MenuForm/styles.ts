import styled from 'styled-components';
import { FaDropbox } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  @media (min-width: 1024px) {
    max-width: 480px;
  }
`;

export const Navigation = styled.nav`
  min-height: 61px;
  padding: 16px 32px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    display: flex;
    align-items: center;

    span {
      font-size: 29px;
      margin-left: 10px;
      color: var(--color-quaternary);
    }

    @media (min-width: 1024px) {
      > h1 {
        display: none;
      }
    }
  }

  > button {
    outline: 0;
    border: none;
    cursor: pointer;
    background: none;

    font-size: 17px;
    font-weight: bold;
  }
`;

export const DropboxLogo = styled(FaDropbox)`
  width: 36px;
  height: 36px;

  flex-shrink: none;
  fill: var(--logo-color);
`;

export const Form = styled.form`
  height: 100%;
  max-width: 480px;

  margin: 0 auto;
  padding: 0 32px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  > .title {
    font-size: 25px;
    font-weight: 500;
  }

  > .subtitle {
    font-size: 12px;
    margin-top: 3px;
  }

  > input {
    margin-top: 18px;
    padding: 13px 18px;
    background: var(--color-tertiary);
    border: 1px solid var(--color-border);

    font-size: 14px;
  }

  > button {
    border: none;
    margin-top: 18px;
    padding: 13px 18px;
    background: var(--color-blue);

    font-size: 16px;
    color: var(--color-tertiary);

    cursor: pointer;

    &:hover {
      opacity: 0.87;
    }
  }

  > .terms {
    opacity: 0.6;
    font-size: 12px;
    margin-top: 4px;
  }
`;
