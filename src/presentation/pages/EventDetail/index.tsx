import { useDocumentTitle } from "@presentation/hooks/useDocumentTitle";
import { memo } from "react";
import { Container } from "react-bootstrap";

const EventDetailPage = memo(() => {
  const [,] = useDocumentTitle("Event Detail");

  return <Container />;
});

export default EventDetailPage;
