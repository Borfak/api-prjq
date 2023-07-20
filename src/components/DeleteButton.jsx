import React from 'react';

const DeleteButton = ({ deletePost, id }) => {
	  return (
    <button
      onClick={() => deletePost(id)}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
      Delete
    </button>
  );
}

export default DeleteButton;