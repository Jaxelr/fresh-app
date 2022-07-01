/** @jsx h */
import { h } from "preact";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p>
        Welcome to my `fresh` test web app. This was done in less than 5 minutes.
      </p>
      <Counter start={3} />
    </div>
  );
}
