import MainPage from "../components/MainPage";
import Row from "../components/Row";
import StaticRow from "../components/StaticRow";
import requests from "../requests";

const Home = ({results}) => {

  return (
    <div>
      <MainPage />
      <StaticRow rowID="1" title="Indian Movies" results={results}/>
      <Row rowID="2" title="UpComing" fetchURL={requests.requestUpcoming} />
      <Row rowID="3" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="4" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID="5" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowID="6" title="Horror" fetchURL={requests.requestHorror} />
    </div>
  );
};
export default Home;
