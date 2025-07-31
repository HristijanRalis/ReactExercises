import { Card } from "../components/Card/Card";
import { Grid } from "../components/Grid/Grid";
import { WelcomeCard } from "../components/WelcomeCard/WelcomeCard";

export const Home = () => {
  return (
    <>
      <h1>Composition vs Inheritance</h1>
      <WelcomeCard />
      <Grid>
        <Card icon={<span>🥲</span>}>
          <>
            <h1>Card 1</h1>
            <p>Dynamic description 1!</p>
          </>
        </Card>
        <Card icon={<span>🤠</span>}>
          <>
            <h1>Card 2</h1>
            <p>Dynamic description 2!</p>
          </>
        </Card>
        <Card icon={<span>🤓</span>}>
          <>
            <h1>Card 3</h1>
            <p>Dynamic description 3!</p>
          </>
        </Card>
      </Grid>
    </>
  );
};
