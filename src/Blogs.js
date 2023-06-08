import { Link } from "react-router-dom";
const Bloglist=(props)=>{
    const blogs = props.blogs;
    const title = props.heading;
    return(
        <div className="blog-list">
            <h2>{title}</h2>
            <br/>
             {blogs.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
                <Link to={`/blog-details/${blog.id}`} className="blog-link">
                <h2>{title}</h2>
                <p>written by {blog.author}</p>
                </Link>
                <button className="btn" onClick={()=> props.handleDelete(blog.id)}>Delete Blog</button>
            </div>
          ))}
          <br/>
          <br/>
        </div>
    )
}
export default Bloglist;