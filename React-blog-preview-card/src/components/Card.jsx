import React from 'react';
import title_img from '../assets/images/illustration-article.svg';
import author_img from '../assets/images/image-avatar.webp';

const Card = () => {
    return (
        <div className="wrapper">
            <div className='card'>
                <img src={title_img} alt="" />
                <h2>Learning</h2>
                <p className="published-date">Published 21 Dec 2023</p>
                <h1>HTML & CSS foundations</h1>
                <p className="description">These languages are the backbone of every website, defining structure, content, and presentation.</p>
                <div className="card-footer">
                    <img src={author_img} alt="Author's avatar" />
                    <span className="author">Greg Hooper</span>
                </div>
            </div>
        </div>
    )
}

export default Card;