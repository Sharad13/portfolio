
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const navLinks = [
  {
    name: 'HOME',
    ref: '/home'
  },
  {
    name: 'SKILLS',
    ref: '/skills'
  },
  {
    name: 'PROJECTS',
    ref: '/projects'
  },
  {
    name: 'CONTACT',
    ref: '/contact'
  },
]
function createLinks() {
  return navLinks.map((e, idx) => (
    <Nav.Link className="navitems1" key={idx} href={e.ref}>{e.name}</Nav.Link>
  ))
}
 
export function Navbbb() {
  return (
    <div className="navigationbar">
      <Navbar className="navigation__container" style={{
        zIndex: '2', position: 'fixed', top: '0', width: '100%'
      }} collapseOnSelect
        expand="md">
        <Navbar.Brand style={{ marginLeft: '1rem' }} href="#home"><span className="s">SHARAD</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse style={{ justifyContent: 'flex-end', marginRight: '1rem', borderColor: 'none' }}>
          <Nav className="links" style={{ margin: '0 1rem' }}>
            {createLinks()}
            <Nav.Link key={10} target="_blank" href="https://bit.ly/3Ef3dU7">RESUME</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}


