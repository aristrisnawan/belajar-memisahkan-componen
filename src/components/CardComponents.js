import React from "react";
import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Row,
  Col,
} from "reactstrap";

export default function CardComponents({title, description, color}) {
    const style = `btn btn-${color}`
  return (
    <Container>
      <Row>
            <Col>
              <Card className="mt-3">
                <CardBody>
                  <CardTitle tag="h5">{title}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Card subtitle
                  </CardSubtitle>
                  <CardText>{description}</CardText>
                  <Button className={style}>Button</Button>
                </CardBody>
              </Card>
            </Col>
      </Row>
    </Container>
  );
}
