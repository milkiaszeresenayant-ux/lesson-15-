import React from "react";
import { useState } from "react";
import Layout from "./components/Layout";
import PostCard from "./components/PostCard";
import Button from "./components/Button";

const posts = [
  {
    id: 1,
    title: "Getting Started with React",
    excerpt: "Components are just functions that return markup.",
    author: "Amina",
    date: "Jan 15, 2026",
  },
  {
    id: 2,
    title: "Why Flexbox Clicked For Me",
    excerpt: "It stopped being magic once I understood the main axis.",
    author: "Brian",
    date: "Jan 14, 2026",
  },
  {
    id: 3,
    title: "My First Deployment",
    excerpt: "Three clicks in GitHub Pages and it was live on the internet.",
    author: "Cynthia",
    date: "Jan 13, 2026",
  },
  {
    id: 4,
    title: "Learning JavaScript Every Day",
    excerpt: "Small, consistent practice helped me understand the basics.",
    author: "Daniel",
    date: "Jan 12, 2026",
  },
  {
    id: 5,
    title: "A Useful CSS Grid Trick",
    excerpt: "Grid made arranging cards across a page much easier.",
    author: "Marta",
    date: "Jan 11, 2026",
  },
  {
    id: 6,
    title: "What I Learned This Week",
    excerpt: "Building a small project is a great way to connect new ideas.",
    author: "Noah",
    date: "Jan 10, 2026",
  },
];

function App() {
  const [visibleCount, setVisibleCount] = useState(3);
  const visiblePosts = posts.slice(0, visibleCount);
  const hasMorePosts = visibleCount < posts.length;

  return (
    <Layout>
      <section id="posts" aria-labelledby="posts-heading">
        <h2 id="posts-heading">Latest Posts</h2>
        {visiblePosts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            excerpt={post.excerpt}
            author={post.author}
            date={post.date}
          />
        ))}
        <Button
          text={hasMorePosts ? "Load more posts" : "All posts loaded"}
          onClick={() => setVisibleCount((count) => count + 3)}
          disabled={!hasMorePosts}
        />
      </section>
    </Layout>
  );
}

export default App;
