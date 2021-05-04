import ReactDOM from "react-dom";
import EventComponent from "./events/EventComponent";
import Parrent from "./props/Parrent";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";

const App = () => {
  return (
    <div>
      <h1> Hi there! </h1>
      <Parrent />
      <GuestList />
      <UserSearch />
      <EventComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
