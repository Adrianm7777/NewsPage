import Chart from "../Charts/Charts";
import "./Content.css";
import Highlight from "./Highlight/Highlight";
import Latest from "./Latest/Latest";

const Content = () => (
  <div className="content-container">
    <Highlight />
    <Latest />
    <Chart />
  </div>
);

export default Content;
