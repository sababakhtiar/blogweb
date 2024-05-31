import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import CommentsList from '../Components/CommentsList';
import AddCommentForm from '../Components/AddCommentForm';
import articles from './article-content';

const ArticlePage = () => {
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
    const { articleId } = useParams();

    useEffect(() => {
        const fetchArticleInfo = () => {
            const article = articles.find(article => article.name === articleId);
            if (article) {
                const mockedData = {
                    upvotes: 10, // Example upvote count
                    comments: [
                        { username: 'Saba', text: 'Great article!' },
                        { username: 'HR', text: 'You Selected.' }
                    ]
                };
                setArticleInfo(mockedData);
            }
        }

        fetchArticleInfo();
    }, [articleId]);

    const article = articles.find(article => article.name === articleId);

    const addUpvote = () => {
        setArticleInfo(prevInfo => ({
            ...prevInfo,
            upvotes: prevInfo.upvotes + 1
        }));
    }

    if (!article) {
        return <NotFoundPage />
    }

    return (
        <div className='m-10 lg:m-40'>
            <h1 className='text-start font-Roboto text-4xl lg:text-7xl mb-8'>{article.title}</h1>
            {article.content.map((paragraph, i) => (
                <p className='m-4 text-justify font-Poppins  bg-gradient-to-r from-gray-300 to-transparent p-6 rounded-lg shadow-lg' key={i}>
                    {paragraph}
                </p>
            ))}
            <div className="mt-10">
                <button className='bg-black text-white rounded-lg font-Poppins w-40 p-2 m-4 hover:bg-gray-800 transition duration-300' onClick={addUpvote}>Upvote</button>
                <p className='font-Poppins m-4 text-lg'>{`This article has ${articleInfo.upvotes} upvote(s)`}</p>
            </div>
            <div className='mt-10 flex'>
                <div className='w-1/2 pr-4'>
                    <AddCommentForm
                        articleName={articleId}
                        comments={articleInfo.comments}
                        onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)}
                    />
                </div>
                <div className='w-1/2 pl-4'>
                    <CommentsList comments={articleInfo.comments} />
                </div>
            </div>
        </div>
    );
}

export default ArticlePage;
