import React from 'react';
import styled from '@emotion/styled';
import { Link } from "react-router-dom";

export default function BackButton(props) {
    const { to, children, icon } = props;
    const StyledLink = styled(Link)`
        color: black;
        font-size: 1.5rem;
        text-decoration: none;
        i {
            font-size: 1.25rem;
            margin-right: 0.25rem;
        }
    `;

    return (
        <StyledLink to={to}><i className={`bi ${icon}`}></i>{children}</StyledLink>
    )
}