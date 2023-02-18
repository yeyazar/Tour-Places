import "./Header.scss";
import Card from "../cards/Card";
import { data } from "../../helper/data";

const Header = () => {
  return (
    <div className="header">
      <div className="title">POPULAR TOUR PLACES</div>

      <div className="cards">
        {data.map((item) => {
          return <Card {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Header;
