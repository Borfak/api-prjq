import React from "react";
import SLoginForm from "./components/SLoginForm";
import Posts from "./components/Posts";


function App() {
 
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-indigo-900">POSTS</h1>
      <SLoginForm />
      <Posts />
    </div>
  );
}

export default App;
