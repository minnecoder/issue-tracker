import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export default function Header() {
  return (
    <Main>
      <Nav>
        <Left>
          <h3>Issue Tracker</h3>
          <ul>
            <li><SidebarLink to="/dashboard">Dashboard</SidebarLink></li>
            <li><SidebarLink to="/manageroles">Manage Roles</SidebarLink></li>
            <li><SidebarLink to="/manageusers">Manage Users</SidebarLink></li>
            <li><SidebarLink to="/projects">Projects</SidebarLink></li>
            <li><SidebarLink to="/tickets">Tickets</SidebarLink></li>
          </ul>
        </Left>
        <Right>
          <SearchBar>
            <FaSearch style={{ paddingRight: '.25rem' }} />
            <input type="search" name="search" id="search" placeholder="Search..." />
          </SearchBar>
          <li>Notifications</li>
          <li>User</li>
        </Right>
      </Nav>
    </Main>
  );
}

const Main = styled.div`
grid-area: header;
height: 4rem;
border-bottom: solid 1px #ddd;
background: #128DEB;
`;

const Nav = styled.div`
display: flex;
justify-content: space-between;
padding-top: 1.5rem;
`;

const Left = styled.div`
display: flex;
align-items: center;

h3{
  padding: 0 2rem;
}

ul {
  display: flex;
    margin-left: 3rem;
}

li {
padding: .5rem;
}
`;

const Right = styled.ul`
display: flex;
align-items: center;
margin-right: 2rem;

li {
  padding: 0 1rem;
}
`;

const SearchBar = styled.div`
margin-left: 2rem;
display: inline-flex;
background: #128DEB;
overflow: hidden;
input {
  border-style:hidden;
  background: #128DEB;
  width: 15rem;
}
input: focus {
  outline: none;
}
`;
const SidebarLink = styled(Link)`
color: black;
`;