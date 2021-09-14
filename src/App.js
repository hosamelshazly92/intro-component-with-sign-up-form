import { container, left, right } from "./App.module.css";
import Banner from "./components/Banner/Banner";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className={container}>
      <div className={left}>
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className={right}>
        <Banner>
          <div>
            <strong>Try it free for 7 days</strong>&nbsp;then $20 / month
            thereafter
          </div>
        </Banner>
        <Form />
      </div>
    </div>
  );
}

export default App;
