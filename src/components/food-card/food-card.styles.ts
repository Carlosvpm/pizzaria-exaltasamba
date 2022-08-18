import styled from "styled-components";


export const PizzaItem = styled.div`
  text-align: center;
  max-width: 250px;
  font-family: "Hepta Slab", Helvetica, Arial;
  margin: 0 auto 50px auto;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
  }
`;

export const PizzaItemIMG = styled.div`
  width: 200px;
  height: 200px;
  background-color: #eee;
  border-radius: 100px;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.2);
  img {
    width: 100%;
    height: auto;
  }
`;

export const PizzaItemAdd = styled.div`
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 25px;
  background-color: #388bc5;
  text-align: center;
  color: #fff;
  font-size: 22px;
  cursor: pointer;
  margin-top: -25px;
  transition: all ease 0.2s;
`;

export const PizzaItemPrice = styled.div`
  font-size: 15px;
  color: #333;
  margin-top: 5px;
`;

export const PizzaItemName = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  margin-top: 5px;
`;
export const PizzaiItemDesc = styled.div`
  font-size: 13px;
  color: #555;
  margin-top: 10px;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  img {
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }
`;

export const CartItemNome = styled.div`
  flex: 1;
`;
export const CartItemQtarea = styled.div`
  display: inline-flex;
  background-color: #eee;
  border-radius: 10px;
  height: 30px;
  button {
    border: 0;
    background-color: transparent;
    font-size: 17px;
    outline: 0;
    cursor: pointer;
    padding: 0px 10px;
    color: #333;
  }
`;

export const CartItemQt = styled.div`
  line-height: 30px;
  font-size: 12px;
  font-weight: bold;
  padding: 0px 5px;
  color: #000;
`;