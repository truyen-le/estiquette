import ItalicText from "@presentation/components/atoms/text/ItalicText";
import Paragraph from "@presentation/components/atoms/text/Paragraph";
import Title from "@presentation/components/atoms/text/Title";
import { useDocumentTitle } from "@presentation/hooks/useDocumentTitle";
import { memo } from "react";
import { Container } from "react-bootstrap";
import { useRouteError } from "react-router-dom";

const ErrorPage = memo(() => {
  const [, ] = useDocumentTitle("Error Page");
  const error: any = useRouteError();

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
      <Title>Oops!</Title>
      <Paragraph>Sorry, an unexpected error has occurred.</Paragraph>
      <ItalicText>{error.statusText || error.message}</ItalicText>
    </Container>
  );
});

export default ErrorPage;
