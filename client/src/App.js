import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import MenuList from "./Components/MenuList";
import MenuForm from "./Components/MenuForm";

function App() {
  const [menus, setMenus] = useState([]);


  async function addMenu(name) {
    try {
      const res = await axios.post("/api/menus", { name });
      setMenus([res.data, ...menus]);
    } catch (err) {
      console.log(err);
    }
  }

  async function updateMenu(id) {
    let { data } = await axios.put(`/api/menus/${id}`);
    setMenus(menus.map((t) => (t.id !== data.id ? t : data)));
  }

  function deleteMenu(id) {
    axios
      .delete(`/api/menus/${id}`)
      .then((res) => {
        const filterMenus = menus.filter((t) => t.id !== res.data.id);
        setMenus(filterMenus);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    axios
      .get("/api/menus")
      .then((res) => {
        console.log(res.data);
        setMenus(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <MenuForm addMenu={addMenu} />
      <h1>Menus</h1>
      <MenuList updateMenu={updateMenu} deleteMenu={deleteMenu} menus={menus} />
    </div>
  );
}

export default App;
