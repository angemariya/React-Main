import styled from '@emotion/styled';

export const Wrapper = styled.div`
    border: 1px solid black;
    border-radius: 3px;
    padding: 20px;
    position: absolute;
    background-color: white;
    top: ${(props) => props.top}px;
    left: ${(props) => props.left}px;
`;