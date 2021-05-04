interface ChildProps {
  color: string;
  isComponent: boolean;
  onClick: () => void;
}

export const Child = ({ color, isComponent, onClick }: ChildProps) => {
  return (
    <div>
      <p>
        Child component with color {color}, and it {text(isComponent)} a
        component
      </p>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export const ChildAsReactComponent: React.FC<ChildProps> = (props) => {
  const { color, isComponent, onClick, children } = props;
  return (
    <div>
      <p>
        Child component with color {color}, and it{" "}
        {textAsConstFunction(isComponent)} a component
      </p>
      <button onClick={onClick}>Click me</button>
      {children}
    </div>
  );
};

function text(isComponent: boolean): string {
  return isComponent ? "is" : "is not";
}

const textAsConstFunction = (isComponent: boolean) => {
  return isComponent ? "is" : "is not";
};
