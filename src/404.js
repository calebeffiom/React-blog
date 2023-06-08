const { Link } = require("react-router-dom/cjs/react-router-dom")

const NotFound = ()=>{
    return(
        <div className="not-found">
            <h2>Oop's Sorry we could not find that</h2>
            <Link to="/">
                Back to home
            </Link>
        </div>
    )
}
export default NotFound;