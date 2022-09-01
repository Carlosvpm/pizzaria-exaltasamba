import { FoodCard } from "../../components/food-card/Food-card";
import { NavBar } from "../../components/navbar/Navbar";
import { PizzaInterface } from "../../models/Pizza.interface";
import { pizzas } from "../../services/pizzas";
import { Container } from "./home.styles";

export const Home = () => {

  const pizzasArray: PizzaInterface[] = pizzas;
  return (
    <>
      <NavBar></NavBar>
      <Container>
        <FoodCard pizzas={pizzasArray}></FoodCard>
      </Container>
    </>
  );
};
