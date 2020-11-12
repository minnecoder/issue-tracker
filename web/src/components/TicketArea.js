import React from 'react';
import styled from 'styled-components';
import TicketList from './TicketList';
import TicketInfo from './TicketInfo';
import TicketDetails from './TicketDetails';

export default function TicketArea() {
  return (
    <Main>
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
        <TicketComment>
          <textarea name="" id="" cols="30" rows="10" />
          {/* <input type="text" name="ticketComment" id="" /> */}
          <button type="submit">Submit</button>
        </TicketComment>
      </DetailPanel>
    </Main>
  );
}

const Main = styled.div`
display: flex;
grid-area: ticketarea;
`;

const ListPanel = styled.div`
flex: 1;
height: calc(100vh - 4.25rem);
background: white;
`;

const DetailPanel = styled.div`
flex: 1;
height: calc(100vh - 4.25rem);
border-left: solid 1px #ccc;
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

const TicketComment = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  margin: 0 auto ;

input[type=text] {
  
  height: 5rem;
  border: solid 1px black;
}

textarea {
  border: solid 1px black;
}

button {
margin-top: .5rem;
padding: .5rem;
width: 6rem;

}
`;
