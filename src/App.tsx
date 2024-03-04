import { useEffect } from "react";
import { useCounterStore } from "./store/counterStore";
import shallow from "zustand/shallow";

function App() {
  const { title, count, posts } = useCounterStore(
    (state) => ({
      count: state.count,
      title: state.title,
      posts: state.posts,
    }),
    shallow
  );

  const { increment, getPosts, multiply } = useCounterStore();

  //const count = useCounterStore((state) => state.count) (Otra forma d hacer lo mismo de arriba)

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1>
        {title}: {count}
      </h1>
      <button
        onClick={() => {
          increment(10);
        }}
      >
        Increment by 10
      </button>

      <button
        onClick={() => {
          multiply(2);
        }}
      >
        Multiply by 2
      </button>

      <hr />
      {posts.map((post) => (
        <>
          <h1>{post.title}</h1>
          <h3>{post.body}</h3>
        </>
      ))}
    </div>
  );
}

export default App;
