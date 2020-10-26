import React from 'react';
import styled from 'styled-components';

export default function Sidebar() {
  return (
    <Main>
      <ul>
        <li>Dashboard</li>
        <li>Manage Roles</li>
        <li>Manage Users</li>
        <li>Projects</li>
        <li>Tickets</li>
      </ul>
    </Main>
  );
}

const Main = styled.div`
position: fixed;
top: 4rem;
height: calc(100% - 4rem);
width: 200px;
${'' /* background: red; */}

ul {
    margin-left: 3rem;
}

li {
padding: 1rem 0;
}

`;
