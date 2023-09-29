import "./navbar.css"

export default function Navbar(){
    return(
        <div className="navbar">
            <h2 className="nav-brand">ReactJS</h2>
            <a className="nav-menu" href="/">Home</a>
            <a className="nav-menu" href="/about">About</a>
            <a className="nav-menu" href="/contact">Contact</a>
        </div>
    )
}