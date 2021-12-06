import styled from 'styled-components'

export const Container = styled.header`
    width: 100%;
    height: 50px;
    background-color: ${props => props.theme.colors.secondary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    color: white;
`;