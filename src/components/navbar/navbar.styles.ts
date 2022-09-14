import { Navbar } from 'react-bootstrap';
import styled from "styled-components";

export const NavbarItems = styled.div`
  ul {
    li {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export interface ColumnCartProps {
  children?: JSX.Element | JSX.Element[];
}
export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;


export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
export const ContainerFinalizeButton = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;


export const NavContainer = styled.div`
  position: fixed;
  width: 100%;
`;
