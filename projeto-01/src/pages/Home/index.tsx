import React from "react"

import { usePost } from "../../hooks/posts"

import { Post } from "../../components/Post"

export const Home: React.FC = () => {
  const { posts } = usePost();

  return (
    <main>
      <div className="main-container">
        {
          posts && posts.map((post) => (
            <div key={post.title} className="main-post-item">
              <Post post={post} />
            </div>
          ))
        }
      </div>
    </main>
  )
}
