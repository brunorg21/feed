import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Wrapper } from "./style";
import { Post } from "./components/Post/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/brunorg21.png",
      name: "Bruno Rafael",
      role: "Estagiário Full Stack",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fizno NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-05-31 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/vcarvalho0.png",
      name: "Vitor Carvalho",
      role: "Estagiário Full Stack",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fizno NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-05-21 20:00:00"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/felipe-barreto-dev.png",
      name: "Felipe Barreto",
      role: "Estagiário Full Stack",
    },
    content: [
      { type: "paragraph", content: "Me mama" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fizno NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-05-29 20:00:00"),
  },
];

export function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <Sidebar />
        <main>
          {posts.map(({ author, content, id, publishedAt }) => (
            <Post
              key={id}
              author={author}
              publishedAt={publishedAt}
              content={content}
            />
          ))}
        </main>
      </Wrapper>
    </>
  );
}
