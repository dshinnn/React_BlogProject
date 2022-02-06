import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PostCards extends Component {
  render() {
    return (
        <div className="card p-3 mt-2 bg-dark text-white border border-secondary border-3 rounded">
            <div className="card-body">
                <h5 className="card-title fw-bold fs-3">{ this.props.post.title }</h5>
                <h6 className="card-subtitle mb-2 text-muted">{ this.props.post.author.username }</h6>
                <p className="card-text">{ this.props.post.content }</p>
                <Link to={`/blog/posts/${this.props.post.id}`} className="btn btn-small btn-secondary">More Info</Link>
            </div>
        </div>
    );
  }
}
