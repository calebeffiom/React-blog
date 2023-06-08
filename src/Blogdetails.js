import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
const Blogdetails = ()=>{
    const {id} = useParams();
    const history = useHistory();
    const {data: blogs,isloading,error} = useFetch("http://localhost:8000/blogs/" + id);
    const handleDelete = ()=>{
        fetch("http://localhost:8000/blogs/" + id,{
            method: "DELETE",
     })
     .then(()=>{history.push("/")})
    }
    return(
        <div className="blog-details">
            {error && <div>{error}</div>}
            {isloading && <div>loading_ _ _</div>}
           {blogs &&
                <article>
                    <h2>{blogs.title}</h2>
                    <p>written by {blogs.author}</p>
                    <div>
                        {blogs.body}
                    </div>
                    <button className="btn" onClick={()=>{handleDelete()}}>Delete</button>
                </article>
            }
        </div>
    );
}
export default Blogdetails;