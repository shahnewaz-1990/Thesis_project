import {
    Row,
    Col,
    Container,
    Form,
    Button,
    CloseButton,
    Table,
    Alert,
    Image
  } from "react-bootstrap";
  import { Link } from "react-router-dom";
  import { useState } from "react";
  
  const onHover = {
      cursor: "pointer",
      position: "absolute",
      left: "5px",
      top: "-10px",
      transform: "scale(2.7)",
  }
  
  const UserProductDetails = () => {
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
    return (
      <Container>
        <Row className="justify-content-md-center mt-5">
          <Col md={1}>
            <Link to="/admin/products" className="btn btn-info my-3">
              Go Back
            </Link>
          </Col>
          <Col md={6}>
            <h1>Edit product</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" required type="text" defaultValue="Panasonic" />
              </Form.Group>
  
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                
                <Form.Group className="mb-3" controlId="formBasicCategory">
                <Form.Label>
                  Category
                  
                </Form.Label>
                <Form.Select
                  required
                  name="category"
                  aria-label="Default select example"
                >
                  <option value="">Choose category</option>
                  <option value="1">Product</option>
                  <option value="2">Service</option>
                  
                </Form.Select>
              </Form.Group> 
                
                <Form.Label>Description</Form.Label>
                <Form.Control
                  name="description"
                  required
                  as="textarea"
                  rows={3}
                  defaultValue="Product description"
                />
              </Form.Group>
                           
              <Form.Group className="mb-3" controlId="formBasicPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control name="price" required type="text" defaultValue="$210" />
              </Form.Group>
              
              <Form.Group controlId="formFileMultiple" className="mb-3 mt-3">
                <Form.Label>Images</Form.Label>
                  <Row>
                      <Col style={{position: "relative"}} xs={3}>
                      <Image src="/images/monitors-category.png" fluid />
                      <i style={onHover} className="bi bi-x text-danger"></i>
                      </Col>
                      <Col style={{position: "relative"}} xs={3}>
                      <Image src="/images/monitors-category.png" fluid />
                      <i style={onHover} className="bi bi-x text-danger"></i>
                      </Col>
                      
                  </Row>
                <Form.Control required type="file" multiple />
              </Form.Group>
              <Button variant="primary" type="submit">
                UPDATE
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default UserProductDetails;
  
  