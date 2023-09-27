import { memo } from "react";
import { Button, Container } from "react-bootstrap";

type HomeTemplateProps = {
  login: () => void;
};

const HomeTemplate = memo(({ login }: HomeTemplateProps) => {
  return (
    <Container>
      <Button onClick={login}>Login</Button>
    </Container>
  );
});

export default HomeTemplate;
