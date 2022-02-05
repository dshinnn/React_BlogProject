import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function SinglePost (props) {
    const [post, setPost] = useState({})
    const { postId } = useParams();
    
    useEffect(() => {
        fetch(`https://kekambas-blog.herokuapp.com/blog/posts/${postId}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setPost(data)
        })
    }, [postId])

    return (
        <>
            <div className="card p-3 mt-2 bg-dark text-white border border-secondary border-3 rounded">
                <div className="card-body">
                    <h5 className="card-title fw-bold fs-3">{ post.title }</h5>
                    {/* <h6 className="card-subtitle mb-2 text-muted">{ post.author.username }</h6> */}
                    <p className="card-text">{ post.content }</p>
                    <a href="#" className="card-link fs-6">Update</a>
                </div>
            </div>
        </>
    );
}
