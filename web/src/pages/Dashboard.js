import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar'
import Header from '../components/Header';

export default function Dashboard() {
  return (
    <div>
      <Main>
        <Header />
        <Sidebar />
        <h1>Dashboard</h1>
      </Main>
    </div>
  );
}

const Main = styled.div`
display: grid;
grid-template-columns: 150px 1fr 1fr;
grid-template-rows: 65px 1fr;
grid-template-areas:
"header header header"
"sidebar dashboard dashboard";
grid-gap: 0;
background: white;
`;
