import "./chartBox.scss";
import { Link } from "react-router-dom";

const ChartBox = () => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src="./user.svg" alt="" />
          <span>Arjun</span>
        </div>

        <h1>9876</h1>
        <Link to="/">View All</Link>
      </div>
      <div className="chartInfo">
        <div className="chart"></div>
        <div className="datas">
          <h2>hello</h2>
          <span>90876</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
