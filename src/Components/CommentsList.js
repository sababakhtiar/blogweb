
import React from 'react';

const CommentsList = ({ comments }) => (
    <div>
        <h3 className='text-2xl font-Roboto mb-4'>Comments:</h3>
        {comments.map((comment, index) => (
            <div key={index} className='bg-gray-200 p-4 mb-4 rounded-lg'>
                <h4 className='font-bold'>{comment.username}</h4>
                <p>{comment.text}</p>
            </div>
        ))}
    </div>
);

export default CommentsList;


