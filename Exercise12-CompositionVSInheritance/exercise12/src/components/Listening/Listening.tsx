import React, { useEffect, useState } from "react";
import { WelcomeCard } from "../WelcomeCard/WelcomeCard";
import { Grid } from "../Grid/Grid";
import { Card } from "../Card/Card";
import { Search } from "../Search/Search";

interface Post {
  title: string;
  body: string;
}

export const Listening = () => {
  const [posts, setPosts] = useState<Array<Post>>([]);
  const [filteredPosts, setFilteredPosts] = useState<Array<Post>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();

      setPosts(data);
      setFilteredPosts(data);
    };

    fetchData();
  }, []);

  const onSearchClick = (formatedTerm: string) => {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(formatedTerm)
    );
    setFilteredPosts(filtered);
  };
  return (
    <>
      <WelcomeCard />
      <Search onSearchClick={onSearchClick} />
      <Grid>
        {filteredPosts?.map(({ title, body }) => (
          <Card>
            <h1>{title}</h1>
            <p>{body}</p>
          </Card>
        ))}
      </Grid>
    </>
  );
};
