import React from 'react';
import styled from 'styled-components';
// import TicketTable from '../components/TicketTable';
// import { Link } from 'react-router-dom';
import Header from '../components/Header';
// import { FaSearch } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import TicketList from '../components/TicketList';
import TicketDetails from '../components/TicketDetails';
import TicketInfo from '../components/TicketInfo';

export default function Tickets() {
  return (
    <div>
      <Main>
        <Header style={{ 'grid-area': 'header' }} />
        <Sidebar style={{ 'grid-area': 'sidebar' }} />
        <ListPanel>

          <TableTitle>
            <h3>Tickets</h3>
            <button type="submit">Create A Ticket</button>
          </TableTitle>
          <TicketList />
        </ListPanel>
        <DetailPanel>
          <TicketInfo />
          <TicketDetails />
        </DetailPanel>
      </Main>
    </div>
  );
}

const Main = styled.div`
display: grid;
grid-template-columns: 200px 1fr 1fr;
grid-template-rows: 65px 1fr;
grid-template-areas:
"header header header"
"sidebar list detail";
grid-gap: 0;
background: #E0E5E9;

`;

const ListPanel = styled.div`
grid-area: list;
height: calc(100vh - 4.25rem);
background: white;
margin: .25rem .25rem 0 .25rem;
`;

const DetailPanel = styled.div`
grid-area: detail;
height: calc(100vh - 4.25rem);
border-left: solid 1px #ccc;
margin: .25rem .25rem 0 0;
display: flex;
flex-direction: column;
background: white;
`;

const TableTitle = styled.div`
display: flex;
justify-content: space-between;
padding: 1rem 1rem;
border-bottom: solid 1px #ccc;

button {
  padding: .5rem;
}
`;
