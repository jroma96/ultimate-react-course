import { useState } from "react";
import "./App.css";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);

  function handleShowAddFriend() {
    setShowAddFriend((s) => !s);
  }

  function handleAddFriend(e, item) {
    e.preventDefault();
    setFriends((arr) => [...arr, item]);
    handleShowAddFriend();
  }

  function FriendsList() {
    return (
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "space-between",
        }}
      >
        {friends.map((item) => {
          return (
            <Friend
              key={item.id}
              profileImg={item.image}
              name={item.name}
              balance={item.balance}
            />
          );
        })}
      </ul>
    );
  }
  function Friend({ profileImg, name, balance }) {
    return (
      <li>
        <img src={profileImg} />
        <h3>{name}</h3>
        {balance > 0 && (
          <p className="green">
            {name} owes you ${balance}
          </p>
        )}
        {balance < 0 && <p className="red">You owe ${Math.abs(balance)}</p>}
        {balance === 0 && <p>You and {name} are even</p>}
        <Button>Select</Button>
      </li>
    );
  }

  function Button({ children, onClick }) {
    return (
      <button onClick={onClick} className="button">
        {children}
      </button>
    );
  }

  function AddFriendForm({ onSubmit }) {
    const [item, setItem] = useState({ name: "", image: "", id: 0 });
    let id = new Date().getTime();
    return (
      <form
        className="form-add-friend"
        onSubmit={(e) => onSubmit(e, { ...item, id: id, balance: 0 })}
      >
        <label>Friend name</label>
        <input
          type="text"
          value={item.name}
          onChange={(e) => setItem((i) => ({ ...i, name: e.target.value }))}
        />
        <label>Image Url</label>
        <input
          type="text"
          value={item.image}
          onChange={(e) => setItem((i) => ({ ...i, image: e.target.value }))}
        />
        <Button>Add</Button>
      </form>
    );
  }

  function SplitBillForm() {
    return (
      <form className="form-split-bill">
        <h2>Split a bill with</h2>
        <label>Bill value</label>
        <input type="text" />
        <label>Your expense</label>
        <input type="text" />
        <label>expense of your friend</label>
        <input type="text" />
        <label>Who's paying the bill</label>
        <select>
          <option value="user">You</option>
          <option value="friend">Friend</option>
        </select>
      </form>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div className="sidebar">
        <FriendsList />
        {showAddFriend && <AddFriendForm onSubmit={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>Add Friend</Button>
      </div>
      <div>
        <SplitBillForm />
      </div>
    </div>
  );
}

export default App;
