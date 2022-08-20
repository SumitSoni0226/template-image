import './App.css';
import Header from "./commonComponents/header"
import Footer from "./commonComponents/footer"
import AllQuestions from './components/questions';
import InputData from './components/InputData';
import { useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  function submitHnadler(newPost) {
    const allPosts = [...posts, newPost]
    setPosts(allPosts);
  }
  return (
    <div className="App">
      <Header />
      <InputData submitHandler={submitHnadler} />
      <AllQuestions posts={posts} />
      <Footer />
    </div>
  );
}

export default App;
