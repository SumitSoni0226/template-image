import './components.css';
import Question from './question';
import { set } from "react";
import { useState } from 'react'

function AllQuestions({ posts }) {
    console.log(posts)
    return (
        <div className="AllQuestions">
            {
                posts.length === 0 ? "No Posts for display" : posts.map((post) => <Question id={post.id} data={post.data} key={post.id} />)
            }
            {/* <Question id={1} />
            <Question id={2} /> */}
        </div>
    );
}

export default AllQuestions;
