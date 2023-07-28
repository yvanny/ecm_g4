import { Link, Outlet } from "react-router-dom"
import "./Layout.css"
import {Navbar,NavDropdown,Nav,Form,FormControl,Button} from "react-bootstrap"

function layout() {
    return (
        <div>
            {/* header */}
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link ><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link ><Link to="/about">About</Link></Nav.Link>
                        <Nav.Link ><Link to="/login">Login</Link></Nav.Link>
                        <Nav.Link ><Link to="/register">Reigster</Link></Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Navbar>

            {/* body */}
            <Outlet />

            {/* footer */}
            <div style={{ height: 300, backgroundColor: '#F8F9FA' }}>
                <h1>Footer</h1>
            </div>
        </div>
    )
}

export default layout;