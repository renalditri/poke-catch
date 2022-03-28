import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Button, ButtonGroup } from 'react-bootstrap';
import useWindowDimensions from '../hook/useWindowsDimension';

export default function SizeButtons(props) {
    const { clickHandler, colSize = 6 } = props;
    const [buttonStates, setButtonStates] = useState([
        (3 == colSize),
        (6 == colSize),
        (12 == colSize),
    ]);
    const StyledBtnGroup = styled(ButtonGroup)`
        margin-top: 0.75rem;
    `;
    const StyledButton = styled(Button)`
        display: inline-block;
        background-color: white;
        color: black;
        border: 1px solid grey;
        border-radius: 0.25rem;
        text-decoration: none;
        transition: all 0.15s;
        padding: 0.1rem 0.35rem;
        cursor: pointer;
        &:hover {
            background-color: white;
            color: black;
            border-color: black;
        }
        &:active {
            background-color: white;
            color: black;
        }
        &:focus {
            background-color: white;
            color: black;
            border-color: grey;
            box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0.5);
        }
        &:active:focus {
            background-color: white;
            color: black;
            border-color: black;
            box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0.5);
        }
        &:disabled {
            background-color: grey;
            color: white;
            border-color: grey;
        }
    `;
    const { height, width } = useWindowDimensions();
    const SmallButton = (width > '1023') ? (
        <StyledButton disabled={buttonStates[0]} value={3} onClick={e => clickHandler(e)}>
            <i class="bi bi-stop"></i>
        </StyledButton>
    ) : '';

    return (
        <StyledBtnGroup>
            {SmallButton}
            <StyledButton disabled={buttonStates[1]} value={6} onClick={e => clickHandler(e)}>
                <i class="bi bi-view-stacked"></i>
            </StyledButton>
            <StyledButton disabled={buttonStates[2]} value={12} onClick={e => clickHandler(e)}>
                <i class="bi bi-card-list"></i>
            </StyledButton>
        </StyledBtnGroup>
    )
}