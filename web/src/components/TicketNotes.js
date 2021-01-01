import React from 'react';
import styled from 'styled-components';
import DateDiff from "../helpers/DateDiff"

export default function TicketDetails() {
  const TicketItems = [
    {
      user: 'Jane Smith',
      propertyChanged: 'Ticket Status',
      oldValue: 'Open',
      newValue: 'Resolved',
      createdAt: '11/2/2020',
    },
    {
      commenter: 'John Doe',
      comment: 'This one thing would be a great idea',
      createdAt: '4/1/2020',
    },

  ];
  return (
    <div>
      {TicketItems
        .map((ticketItem) => {
          if ('comment' in ticketItem) {
            return (
              <TicketComment key={ticketItem.commenter}>
                <div>
                  {ticketItem.commenter}
                  {' '}
                  commented
                  {' '}
                  <span>

                    {DateDiff(
                      ticketItem.createdAt,
                    )}
                  </span>
                </div>
                <p>
                  {ticketItem.comment}
                </p>
              </TicketComment>
            );
          }
          if ('oldValue' in ticketItem) {
            return (
              <TicketChange key={ticketItem.user}>
                <p>
                  {ticketItem.user}
                  {' '}
                  changed
                  {' '}
                  {ticketItem.propertyChanged}
                  {' '}
                  from
                  {' '}
                  {ticketItem.oldValue}
                  {' '}
                  to
                  {' '}
                  {ticketItem.newValue}
                  <span>
                    {DateDiff(
                      ticketItem.createdAt,
                    )}
                  </span>
                </p>

              </TicketChange>
            );
          }
          return null;
        })}
    </div>

  );
}

const TicketChange = styled.div`
display: flex;
justify-content: space-between;
background: #E7F3FD;
margin: .5rem;
padding: .5rem;

span {
  padding-top: .25rem;
  padding-left: .25rem;
    font-size: 12px;
    color: #B2B9BE; 
}
`;

const TicketComment = styled.div`
display: flex;
flex-direction: column;
padding: .5rem;

div {
   
    padding: .5rem;
    background: #E7F3FD;
}
span {
  padding-top: .25rem;
    font-size: 12px;
    color: #B2B9BE; 
}
p {
    margin-top: .25rem;
    padding: .75rem;
    border-left: solid 1px #ccc;
}
`;
