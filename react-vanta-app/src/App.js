import "./styles.css";
import { MyComponent } from "./components/MyComponent";
// import { RingsAnimation } from "./components/RingsAnimation";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <MyComponent />
      {/* <RingsAnimation /> */}
    </div>
  );
}
