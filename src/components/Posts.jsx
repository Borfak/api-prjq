import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import api from "../api/posts";


const Posts = () => {
		 function closeModal() {
     setIsOpen(false);
   }

   function openModal() {
     setIsOpen(true);
   }

   let [isOpen, setIsOpen] = useState(false);

   const [posts, setPosts] = useState([]);

   const [formData, setFormData] = useState({
     lat: "",
     lon: "",
     location: "",
     link: "",
   });

   const handleChange = (event) => {
     const { name, value } = event.target;
     setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
   };

   const handleSubmit = async (event) => {
     event.preventDefault();
     setPosts((prev) => [formData, ...prev]);
     setFormData({
       lat: "",
       lon: "",
       location: "",
       link: "",
     });
     closeModal();
   };

   const deletePost = (index) => {
     setPosts((prev) => prev.filter((post, i) => i !== index));
   };

   useEffect(() => {
     const fetchPosts = async () => {
       try {
         const responce = await api.get("/locations/units/map/simple");
         setPosts(responce.data);
       } catch (err) {
         console.log("Error fetching posts:", err);
       }
     };

     fetchPosts();
   }, []);

   return (
   

       <div className="grid grid-cols-2 items-center">
         {posts.map((post, index) => (
           <div
             key={index}
             className="grid max-w-lg mb-5 p-6 bg-white border border-gray-200 
      rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
           >
             <p className="text-red-600 font-bold">lat: {post.lat}</p>
             <h3 className="text-indigo-300 font-bold">lon: {post.lon}</h3>
             <p className="text-indigo-600 font-bold">
               location: {post.location}
             </p>
             <p className="text-indigo-900 font-bold">link: {post.link}</p>
             <button
               onClick={() => deletePost(index)}
               className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
             >
               Delete
             </button>
           </div>
         ))}
       </div>
   );

}

export default Posts;
