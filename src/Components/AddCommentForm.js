import { useState } from 'react';

const AddCommentForm = ({ articleName, comments, onArticleUpdated }) => {
    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');

    const addComment = async () => {
        // Update the comments list
        const updatedComments = [
            ...comments,
            { username, text: commentText }
        ];
        
        // Simulate the updated article info
        const updatedArticle = {
            upvotes: 10, // Maintain the same upvotes count or update as needed
            comments: updatedComments
        };

        // Update the article state in the parent component
        onArticleUpdated(updatedArticle);

        // Clear the form fields
        setUsername('');
        setCommentText('');
    };

    return (
        <div className='bg-gray-100 p-4 mb-4 rounded-lg'>
            <h3 className='text-2xl font-Roboto mb-4'>Add a Comment</h3>
            <label className='block mb-2'>
                Name:
                <input
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='border rounded-lg p-2 w-full'
                />
            </label>
            <label className='block mb-2'>
                Comment:
                <textarea
                    rows='4'
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    className='border rounded-lg p-2 w-full'
                ></textarea>
            </label>
            <button
                className='bg-black text-white rounded-lg font-Poppins w-40 p-2 mt-2 hover:bg-gray-800 transition duration-300'
                onClick={addComment}
            >
                Add Comment
            </button>
        </div>
    );
};

export default AddCommentForm;
