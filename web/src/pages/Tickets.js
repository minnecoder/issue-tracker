import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import TicketTable from '../components/TicketTable';

export default function Tickets() {
  return (
    <div>
      <Main>
        <Header />
        <TicketTable />
      </Main>
    </div>
  );
}

const Main = styled.div`
width: 100%;
height: 100%;
`;
