import { stringify } from "node:querystring";
import { useState } from "react";

const users = [
  { name: "Mohamed", age: 40 },
  { name: "Terje", age: 37 },
  { name: "Leo", age: 12 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((u) => {
      return u.name === name;
    });

    setUser(foundUser);
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Search</button>
      <div>
        <p>
          {user?.name} {user?.age}
        </p>
      </div>
    </div>
  );
};

export default UserSearch;
