import React from 'react';
import styled from 'styled-components';

export default function TicketTable() {
  const tickets = [{
    title: 'Test ticket #1',
    description: 'This is just a test ticket',
    assignedDev: 'John Doe',
    submitter: 'John Smith',
    ticketPriority: 'Medium',
    ticketStatus: 'Open',
    ticketType: 'Bug',
  },
  {
    title: 'Test ticket #2',
    description: 'This is just a test ticket',
    assignedDev: 'John Doe',
    submitter: 'John Smith',
    ticketPriority: 'Medium',
    ticketStatus: 'Open',
    ticketType: 'Bug',
  },
  {
    title: 'Test ticket #3',
    description: 'This is just a test ticket',
    assignedDev: 'John Doe',
    submitter: 'John Smith',
    ticketPriority: 'Medium',
    ticketStatus: 'Open',
    ticketType: 'Bug',
  }];
  return (
    <Table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Assigned Developer</th>
          <th>Submitter</th>
          <th>Ticket Priority</th>
          <th>Ticket Status</th>
          <th>Ticket Type</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((ticket) => (
          <tr key={ticket.id}>
            <td>{ticket.title}</td>
            <td>{ticket.description}</td>
            <td>{ticket.assignedDev}</td>
            <td>{ticket.submitter}</td>
            <td>{ticket.ticketPriority}</td>
            <td>{ticket.ticketStatus}</td>
            <td>{ticket.ticketType}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

const Table = styled.table`
border-collapse: collapse;
width: 100%;

thead th {
    padding: 0.5rem;
    text-align: left;
    border-bottom: solid 1px black;
}
tbody td {
    padding: 0.5rem;
text-align: left;
    border-bottom: solid 1px black;
}
`;
