import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';

export function Agregarproductos({setProductos}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [image, setImage] = useState('');

  const handleGuardar = () => {
    const nuevoProducto = {
    title: titulo,
    description: descripcion,
    image: image
    };
    setProductos(prev =>[...prev,nuevoProducto]);
    handleClose();
  };
  
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Agregar Productos
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Productos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Titulo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre Producto"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </Form.Group>

            <Form.Label htmlFor="basic-url">Image URL</Form.Label>
            <InputGroup className="mb-3">
                <Form.Control id="basic-url" aria-describedby="basic-addon3" 
                value={image}
                onChange={(e) => setImage(e.target.value)}
                />
            </InputGroup>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descripcion</Form.Label>
              <Form.Control as="textarea" rows={10} 
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleGuardar}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

