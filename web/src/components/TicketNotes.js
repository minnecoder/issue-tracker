import React from 'react';
import styled from 'styled-components';

export default function TicketDetails() {
  function DateDiff(oldDate) {
    const date1 = new Date(oldDate).getTime();
    const date2 = new Date();
    const results = Math.floor((date2 - date1) / (60000 * 60));
    // 2 or more years
    if (results > 17520) {
      return `${Math.floor(results / 8759)} years ago`;
    }
    // 1 year
    if (results > 8759 && results < 17519) {
      return `${Math.floor(results / 8759)} year ago`;
    }
    // 2 to 11 months
    if (results > 1440) {
      return `${Math.floor(results / 696)} months ago`;
    }
    // 1 month
    if (results > 719 && results < 1439) {
      return `${Math.floor(results / 696)} month ago`;
    }
    // 2 to 30 days
    if (results > 48) {
      return `${Math.floor(results / 24)} days ago`;
    }
    // 1 day
    if (results > 24 && results < 47) {
      return `${Math.floor(results / 24)} day ago`;
    }
    // Less than a day
    return results;
  }
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
              <TicketComment>
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
              <TicketChange>
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
background: #EFF3F6;
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
    background: #EFF3F6;
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
