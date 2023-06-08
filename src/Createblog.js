import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Create = ()=>{

    const[title, setTitle] = useState("");
    const[body, setBody] = useState("");
    const[author, setAuthor] = useState("");
    const history = useHistory();
    const blog = {title,body,author}
    const submit = ()=>{

        fetch("http://localhost:8000/blogs",{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(blog),
        })
        .then((response)=>{return (response.json(), setTitle(""), setBody(""),setAuthor(""),history.push("/"))})
        .catch((error)=>{console.log(error)})
    }
    return(
        <div className="create">
        <h2>Add a New Blog</h2>
        <form>
            <label>Blog Title</label>
            <input text="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <label>Blog Body</label>
            <textarea required value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
            <label>Blog Author</label>
            {/* <select
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}>
                <option value="caleb">Caleb</option>
                <option value="David">David</option>
                
            </select> */}
            <input text="text" required value={author} onChange={(e)=>setAuthor(e.target.value)}/>
            <button onClick={(e)=>{e.preventDefault(); submit()}}>Add Blog</button>
        </form>
    </div>
)
    
}
export default Create;