import AppName from "./assets/components/AppName";
import AddTodo from "./assets/components/AddTodo";
import Todoiteam from "./assets/components/Todoiteam";
import ShowEmpty from "./assets/components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  // const array = [
  //   {
  //     Name: "Buy Milk",
  //     DueDate: "4/10/15",
  //   },
  //   {
  //     Name: "go to college",
  //     DueDate: "4/10/15",
  //   },
  //   {
  //     Name: "Anubhav",
  //     DueDate: "24/12/2004"
  //   }
  // ];

  //make an state
  let itemstate = useState([]);
  let todoItems = itemstate[0];
  let setTodoItems = itemstate[1];

  const onNewItem = (itemName, itemDate) => {
    // console.log(itemName,itemDate);
    setTodoItems([...todoItems, { Name: itemName, DueDate: itemDate }]);
    // setTodoItems({});
  };

  const deleteItem = (itemName) => {
    const newTodoItems = todoItems.filter((item) => item.Name !== itemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center>
      <div className="main-container">
        <AppName></AppName>
        <div className="content">
          <AddTodo onNewItem={onNewItem}></AddTodo>
          {todoItems.length === 0 && <ShowEmpty></ShowEmpty>}

          <Todoiteam Itemarray={todoItems} toDelete={deleteItem}></Todoiteam>
        </div>
      </div>
    </center>
  );
}

export default App;

/* structure till now
App.jsx->{
    AppName
    AddTodo
    Todoitem -> Additem
} */
