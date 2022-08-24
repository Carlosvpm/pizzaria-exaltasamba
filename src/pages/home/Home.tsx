import { FoodCard } from "../../components/food-card/Food-card";
import { NavBar } from "../../components/navbar/Navbar";
import { Container } from "./home.styles";

export const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      <Container>
        <FoodCard></FoodCard>
      </Container>
    </>
  );
};
