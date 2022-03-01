import api from '../../services/api';
import Post from '../../components/Post';
import { useState, useEffect } from 'react';

export default function Main () {

    const [post, setPost] = useState([]); 

    useEffect(() => {
        api.get('/posts')
        .then((response) => {
            setPost(response.data);
         })
    },[])

    return (

        <>
            <section className="mt-5 container">
                <h2 className="mt-3">Pagina principal</h2>
                <div className="mt-5 container-posts">
                    {
                        post.map(post => {
                            return (    
                                
                                <ul key={post.id}>
                                    <Post
                                      subtitle={post.category} 
                                     title={post.title}
                                     author={post.author}
                                     date={post.date}
                                     >
                                         {post.resume}
                                     </Post>
                                </ul>
                            )
                        })
                    }
                </div>
          </section>
        </>
    )
}
 