import React from 'react';
import { List } from 'react-native-paper';
import MenuInferior from './components/MenuInferior';

function App() {
  return (
    <>
      <div className="container">
        <div className="header">
          <h1 className="title">Configurações</h1>
        </div>

        <div className="profile">
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop"
            alt="Profile"
            className="profile-img"
          />
          <h2 className="profile-name">Evelyn Cardoso</h2>
          <a href="mailto:evecardoso@gmail.com" className="profile-email">
            evecardoso@gmail.com
          </a>
        </div>

        <div className="economia">
          <h3 className="economia-title">Economia</h3>
          <div className="economia-box">
            <span className="economia-text">👏 Parabéns você economizou R$ 13,53! 🎉</span>
          </div>
        </div>

        <List.Section>
          <List.Item
            title="Dados da conta"
            left={() => <List.Icon icon="account" />}
          />
          <List.Item
            title="Histórico de compras"
            left={() => <List.Icon icon="history" />}
          />
          <List.Item
            title="Ajuda e suporte"
            left={() => <List.Icon icon="help-circle" />}
          />
          <List.Item
            title="Sair da conta"
            left={() => <List.Icon icon="logout" color="red" />}
            titleStyle={{ color: 'red' }}
          />
        </List.Section>
      </div>

      <MenuInferior />

      <style>
        {`
          .container {
            min-height: 100vh;
            background-color: #FFF5F5;
            padding: 24px;
          }

          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 32px;
          }

          .title {
            font-size: 1.25rem;
            font-weight: 600;
          }

          .profile {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 32px;
          }

          .profile-img {
            width: 96px;
            height: 96px;
            border-radius: 50%;
            margin-bottom: 12px;
          }

          .profile-name {
            font-size: 1.125rem;
            font-weight: 600;
          }

          .profile-email {
            font-size: 0.875rem;
            color: gray;
            text-decoration: underline;
          }

          .economia {
            margin-bottom: 24px;
          }

          .economia-title {
            font-size: 1.125rem;
            font-weight: 600;
            margin-bottom: 12px;
          }

          .economia-box {
            background-color: white;
            border-radius: 12px;
            padding: 16px;
          }

          .economia-text {
            font-size: 0.875rem;
          }

          .menu {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .menu-item {
            padding: 16px;
            background-color: white;
            border-radius: 12px;
            font-size: 1rem;
          }

          .logout {
            color: red;
          }
        `}
      </style>
    </>
  );
}

export default App;