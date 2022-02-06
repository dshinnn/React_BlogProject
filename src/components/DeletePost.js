import React from 'react';
import { useParams } from 'react-router-dom';

export default function DeletePost(props) {
    const {postId} = useParams();

    const handleDelete = () => {
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${props.token}`)

        fetch(`https://kekambas-blog.herokuapp.com/blog/posts/${postId}`, {
            method: "DELETE",
            headers: myHeaders
        }).then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div className="modal">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Delete Confirmation</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>Are you sure you want to delete this post?</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-danger" onClick={ handleDelete }>Delete</button>
                </div>
                </div>
            </div>
        </div>
    );
}
