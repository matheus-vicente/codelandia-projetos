import React, { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react"

export type Post = {
  title: string
  content: string
  createdAt: string
  favorited: boolean
}

type PostContextData = {
  posts: Post[]
  setPosts: Dispatch<SetStateAction<Post[]>>
}

const PostContext = createContext({} as PostContextData)

const PostProvider: React.FC = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    setPosts([
      {
        title: "Agora é oficial: o Windows 11 está vindo",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.",
        createdAt: "14/03/2022",
        favorited: false,
      },
      {
        title: "Tim Berners-Lee vai leiloar código-fonte da web",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.",
        createdAt: "13/03/2022",
        favorited: true,
      },
      {
        title: "Tem Firefox novo no pedaço e você vai querer migrar",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est.",
        createdAt: "12/03/2022",
        favorited: false,
      },
  ])
  }, [])

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  )
}

const usePost = () => {
  const context = useContext(PostContext)

  if (!context) throw new Error("PostContext precisa estar dentro de um PostProvider!")

  return context
}

export { PostProvider, usePost }
