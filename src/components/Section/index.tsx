import React from 'react';

import {
  Container,
  Content,
  HeaderWrapper,
  Header,
  DropboxLogo,
} from './styles';

interface Props {
  title: string;
  description: string;
  varient: 'blue' | 'beige' | 'white' | 'black';
}

const Section: React.FC<Props> = ({ varient, title, description }) => {
  const buttonVariant = Math.round(Math.random());

  function handleToggle() {
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  }

  return (
    <Container className={varient}>
      <HeaderWrapper>
        <Header>
          <h1>
            <DropboxLogo />
            <span>Dropbox</span>
          </h1>

          <button onClick={handleToggle}>
            {buttonVariant === 0 ? 'Acessar' : 'Interagir'}
          </button>
        </Header>
      </HeaderWrapper>

      <Content>
        <h2>{title}</h2>
        <p>{description}</p>
      </Content>
    </Container>
  );
};

export default Section;
