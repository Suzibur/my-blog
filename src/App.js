import React, { createContext, useState, useEffect } from 'react';
import './App.css';
import PostWindow from './components/postWindow/PostWindow';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/header/Header';
import FullPost from './components/fullPost/FullPost';
import ComingSoon from './components/comingSoon/ComingSoon';
export const ContextData = createContext();

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
      const url = `https://jsonplaceholder.typicode.com/posts`;
      fetch(url)
          .then(res => res.json())
          .then(data => setPosts(data));
  })
  return (
    <ContextData.Provider value={posts}>
      <div className="body">
        <Header></Header>
        <Router>
          <Switch>
            <Route exact path="/">
              <PostWindow></PostWindow>
            </Route>
            <Route  path="/about">
              <ComingSoon></ComingSoon>
            </Route>
            <Route  path="/contact">
              <ComingSoon></ComingSoon>
            </Route>
            <Route  path="/:id">
              <FullPost></FullPost>
            </Route>
          </Switch>
        </Router>
      </div>
    </ContextData.Provider>
  );
}

export default App;
