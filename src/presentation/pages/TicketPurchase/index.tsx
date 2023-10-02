import { useDocumentTitle } from "@presentation/hooks/useDocumentTitle";
import { memo } from "react";
import { Container } from "react-bootstrap";

const TicketPurchasePage = memo(() => {
  const [,] = useDocumentTitle("Ticket Purchase");

  return <Container />;
});

export default TicketPurchasePage;
