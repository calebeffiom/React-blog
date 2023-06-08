import { Link } from "react-router-dom";
const Nav = ()=>{
    return(
        <nav className="navbar">
           
                <h1>C-Blog</h1>
           
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">CreateBlog</Link>
            </div>
        </nav>
    );
}
export default Nav;