import { Link } from 'react-router-dom'
// import './Navigator.css'

function Navigator() {
    return (
        <>
            <nav className="d-flex flex-row-reverse">
                <Link to="/">Home</Link> | <Link to="/mystyle">MyStyle</Link> | <Link to="/note">Note</Link> | <Link to="/contact">Contact</Link>
                {/* <Link to="/about">About</Link> */}
            </nav>
            <hr />
        </>
    )
}

export default Navigator
