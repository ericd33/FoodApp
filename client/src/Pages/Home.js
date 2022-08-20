import React from "react";
import { useEffect, useState } from "react";
import "./Home.css";
import Nav from "../Components/Nav";
import RecipeBox from "../Components/RecipeBox";
import axios from "axios";
import Controls from "../Components/Controls";


//const myKey = process.env.REACT_APP_API_KEY;
export default function Home() {
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(20);
  


  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await axios.get("http://localhost:3001/allrecipes");
      setFood(response.data.results);
      setLoading(false);
    };

    getData();
  }, []);

  //Get current post
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = food.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <Nav/>
      <button></button>
      <Controls/>
      <RecipeBox loading={loading} food={currentPosts} />
    </>
  );
}
