import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Sidebar() {
    return (
        <Main>
            <ul>
                <li><SidebarLink to="/dashboard">Dashboard</SidebarLink></li>
                <li><SidebarLink to="/manageroles">Manage Roles</SidebarLink></li>
                <li><SidebarLink to="/manageusers">Manage Users</SidebarLink></li>
                <li><SidebarLink to="/projects">Projects</SidebarLink></li>
                <li><SidebarLink to="/tickets">Tickets</SidebarLink></li>
            </ul>
        </Main>
    );
}

const Main = styled.div`
grid-area: sidebar;
width: 200px;
background: white;
border-right: solid 1px #ddd;
ul {
    margin-left: 3rem;
}
li {
padding: 1rem 0;
}
`;

const SidebarLink = styled(Link)`
color: black;
`;