import React from 'react';

import { Container, Navigation, DropboxLogo, Form } from './styles';

const MenuForm: React.FC = () => {
  function handleToggle() {
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  }

  return (
    <Container>
      <Navigation>
        <h1>
          <DropboxLogo />
          <span>Dropbox</span>
        </h1>

        <button onClick={handleToggle} className='action--close'>
          ✕
        </button>
      </Navigation>

      <Form>
        <span className='title'>Registrar-se</span>
        <span className='subtitle'>preencha o formulário abaixo</span>

        <input type='text' placeholder='Nome' />
        <input type='text' placeholder='Sobrenome' />
        <input type='text' placeholder='E-mail' />
        <input type='text' placeholder='Senha' />

        <button>Prosseguir</button>
        <span className='terms'>
          Esta páginas está sujeita à Política de privacidade e aos termos de
          serviço.
        </span>
      </Form>
    </Container>
  );
};

export default MenuForm;
