import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: #399ade;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 2.5rem;
    color: black;
    letter-spacing: 2px;
    font-family: "Lato", Helvetica, Arial;
  }
`;
