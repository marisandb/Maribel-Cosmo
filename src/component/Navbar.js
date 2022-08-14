import Nav from 'react-bootstrap/Nav';


function Navbar() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/gallery">Gallery</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/policies">Policies</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Navbar;