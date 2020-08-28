import styled from 'styled-components';
import { FaDropbox } from 'react-icons/fa';

export const Container = styled.div`
  --padding-top: 100px;
  --content-width: 100%;
  --padding-bottom: 120px;
  --heading-font-size: 32px;

  &.blue {
    --bg-color: var(--color-primary);
    --text-color: var(--color-tertiary);
    --logo-color: var(--color-secondary);
  }

  &.beige {
    --bg-color: var(--color-secondary);
    --text-color: var(--color-quaternary);
    --logo-color: var(--color-primary);
  }

  &.white {
    --bg-color: var(--color-tertiary);
    --text-color: var(--color-quaternary);
    --logo-color: var(--color-blue);
  }

  &.black {
    --bg-color: var(--color-quaternary);
    --text-color: var(--color-tertiary);
    --logo-color: var(--color-blue);
  }

  &:first-child {
    --padding-top: 130px;
    --content-width: 50%;
    --heading-font-size: 51px;

    @media (min-width: 1024px) {
      --content-width: 50%;
      --heading-font-size: 71px;
    }
  }

  position: relative;
  background-color: var(--bg-color);
`;

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  clip: rect(auto, auto, auto, auto);
`;

export const Header = styled.header`
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  position: fixed;

  margin: 0 auto;
  max-width: 1440px;
  padding: 16px 32px;
  background-color: var(--bg-color);

  display: flex;
  justify-content: space-between;

  > h1 {
    display: flex;
    align-items: center;

    span {
      margin-left: 10px;

      font-size: 29px;
      color: var(--text-color);
    }
  }

  button {
    font-size: 16px;
    color: var(--text-color);

    border: none;
    outline: none;
    background: none;

    cursor: pointer;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;

export const DropboxLogo = styled(FaDropbox)`
  width: 36px;
  height: 36px;

  flex-shrink: none;
  fill: var(--logo-color);
`;

export const Content = styled.div`
  z-index: 2;
  position: relative;

  margin: 0 auto;
  max-width: 1440px;
  padding: var(--padding-top) 32px var(--padding-bottom);

  > h2 {
    color: var(--logo-color);
    font-size: var(--heading-font-size);
    max-width: var(--content-width);
  }

  > p {
    font-size: 16px;
    color: var(--text-color);

    margin-top: 20px;
    max-width: var(--content-width);
  }
`;
