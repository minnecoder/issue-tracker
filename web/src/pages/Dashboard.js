import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

export default function Dashboard() {
  return (
    <div>
      <Header />
      <Main>
        <h1>Dashboard</h1>
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
