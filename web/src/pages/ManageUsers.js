import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function ManageUsers() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Main>
        <h1>ManageUsers</h1>
      </Main>
    </div>
  );
}

const Main = styled.div`
position: fixed;
right: 0;
height: calc(100vh - 4rem);
width: calc(100% - 200px);
background: lightgray;
`;
