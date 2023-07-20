import React, { useEffect, useState } from 'react';
import api from './api/posts';

function App() {
  const [posts, setPosts] = useState([])

const deletePost = (index) => {
  setPosts(prev => prev.filter((post, i) => i !== index));
};  


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const responce = await api.get('/locations/units/map/simple')
        setPosts(responce.data)
      }
      catch (err) {
        if (err.responce) {
        console.log(err.responce.data)
        console.log(err.responce.status)
        console.log(err.responce.headers)
      }
      else {
        console.log(err.message)
      }
    }
    }

    fetchPosts()
  }, [])
  
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-indigo-900">POSTS</h1>
      <div className="grid grid-cols-2">
        {posts.map((post, index) => (
          <div
            key={index}
            className="block max-w-lg mb-5 p-6 bg-white border border-gray-200 
      rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <p className="text-red-600 font-bold">Lat: {post.lat}</p>
            <h3 className="text-indigo-300 font-bold">Lon: {post.lon}</h3>
            <p className="text-indigo-600 font-bold">
              Location: {post.location}
            </p>
            <p className="text-indigo-900 font-bold">Link: {post.link}</p>
            <button
              onClick={() => deletePost(index)}
              class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
