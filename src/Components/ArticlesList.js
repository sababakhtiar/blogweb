
import React from 'react'
import { Link } from 'react-router-dom'
import articles from '../pages/article-content'
const ArticlesList = () => {
  return (
   
    <div className="m-10">
            <h1 className="font-bold text-3xl font-Roboto text-[#212121] text-center mb-10  ">Articles</h1>
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                {articles.map(article => (
                    <Link key={article.name} to={`/articles/${article.name}`} className="block">
                        <div className="rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 bg-white h-64 w-96 mx-auto">
                            <div className="p-6 h-full flex flex-col justify-between">
                                <div>
                                    <h3 className="font-Roboto text-2xl font-bold mb-4">{article.title}</h3>
                                    <p className="font-Poppins text-gray-700 mb-4  bg-gradient-to-r from-gray-300 to-transparent">{article.content[0].substring(0, 120)}...</p>
                                </div>

                                <button className='text-lg font-bold p-1 text-white rounded  bg-black'>ReadMore</button>

                                <hr className="border-t-2 border-gray-200" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
  )
}

export default ArticlesList
