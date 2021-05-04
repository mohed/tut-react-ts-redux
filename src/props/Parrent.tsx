import { Child, ChildAsReactComponent } from "./Child";

const Parrent = () => {
  return (
    <>
      <Child color="red" isComponent={false} onClick={onClick} />
      <ChildAsReactComponent color="blue" isComponent={true} onClick={onClick}>
        <p>We can also provide some children</p>
      </ChildAsReactComponent>
    </>
  );
};

const onClick = () => console.log("Clicked");

export default Parrent;
