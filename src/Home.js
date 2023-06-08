import { useState} from "react";
import Bloglist from "./Blogs";
import useFetch from "./useFetch";


const Home = ()=>{
   const noBlog = "No blogs to display"
   const {data: blogs,isloading,error} = useFetch("http://localhost:8000/blogs")
   const[text,setText] = useState("")
   const handleDelete = (id)=>{
        // const userId = {id}
     fetch("http://localhost:8000/blogs/" + id,{
            method: "DELETE",
     })
     .then(()=>{window.location.reload();})
        .catch((error)=>{console.log(error)})

   }
    return(

        <div className="home">
         {/* these are called conditional statements  */}
         {error && <div>{error}</div>}
         {isloading && <div>loading_ _ _</div>}
         {blogs && <input value={text} onChange={(e)=>{setText(e.target.value)}} type="text" className="filter" placeholder="Filter Blogs"/>}
         {/* <button onClick={()=>{filtered()}}>filter</button> */}
         {blogs && <Bloglist blogs={blogs} heading="All blogs" handleDelete={handleDelete}/>}
         {blogs && <Bloglist blogs={blogs.filter((blog)=>blog.author === text)} heading={text} handleDelete={handleDelete}/>}
         {blogs == "" && <h2>{noBlog}</h2>}
         {/* <Bloglist blogs={blogs.filter((blog) => blog.author === "David")} heading="some blogs" handleDelete={handleDelete}/> */}
        </div>
        
    );
}
export default Home;