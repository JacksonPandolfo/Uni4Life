import { makeRequest } from "../../axios";
import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from 'react-query'


const Posts = () => {
  // eslint-disable-next-line no-unused-vars
  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get("/posts").then((res) => res.data)
  );

  console.log(data);

  return (
    <div className="posts">
      {isLoading 
        
        ? "loading" 
        : data // Verifica se data existe antes de chamar map
          ? data.map((post) => <Post post={post} key={post.id} />)
          : "No data available"}
    </div>
  );
};

export default Posts;
