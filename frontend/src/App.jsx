import "./App.css";
import MovieCard from "./assets/components/MovieCard";

function App() {
  return (
    <>
      <div>
        <p>Hello world</p>
        <Test text="text" />
      </div>
    </>
  );
}

function Test({ text }) {
  return (
    <>
      <div>{text}</div>
    </>
  );
}

export default App;
