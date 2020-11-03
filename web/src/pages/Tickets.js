import React from 'react';
import styled from 'styled-components';
// import TicketTable from '../components/TicketTable';
import Header from '../Header';
import Sidebar from '../Sidebar';
import TicketList from "../components/TicketList"
import TicketDetails from "../components/TicketDetails"

export default function Tickets() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Main>
        <TicketArea>
          <ListPanel>

            <TableTitle>
              <h3>Tickets</h3>
              <button type="submit">Create A Ticket</button>
            </TableTitle>
            <TicketList /> 
          </ListPanel>
          <DetailPanel>
          <TicketDetails />
          </DetailPanel>
          </TicketArea>
    
     
      </Main>
    </div>
  );
}

const Main = styled.div`
position: fixed;
right: 0;
height: calc(100vh - 4rem);
width: calc(100% - 200px);
display: flex;
background: lightgray;
`;

const TicketArea = styled.div`
display: flex;
margin: 1rem;
border: solid 1 px black;
border-collapse: separate;
border-radius: 5px;
background: white;
`


const ListPanel = styled.div`
flex: 1;
height: 100vh;
`

const DetailPanel = styled.div`
flex: 1;
height: 100vh;
border-left: solid 1px #ccc;
`

const TableTitle = styled.div`
display: flex;
justify-content: space-between;
padding: 1rem 1rem;
border-bottom: solid 1px #ccc;

button {
  padding: .5rem;
}
`
