import ChartBox from "../../components/chartBox/ChartBox";
import ChartPie from "../../components/chartPie/ChartPie";
import TopBox from "../../components/topBox/TopBox";
import "./home.scss";

function Home() {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox />
      </div>
      <div className="box box3">Box3</div>
      <div className="box box4">
        <ChartPie />
      </div>
      <div className="box box5">
        {" "}
        <ChartBox />
      </div>
      <div className="box box6"></div>
      <div className="box box7">Box7</div>
      <div className="box box8">Box8</div>
      <div className="box box9">Box9</div>
    </div>
  );
}

export default Home;
