import React from 'react';
import { Header } from "semantic-ui-react";

const Menu = ({ complete, name }) => (
  <div style={styles.flex}>
    <div style={styles.flex}>
      <div style={complete ? styles.complete : {}} className="center">
        <Header as="h2" style={{ marginLeft: "15px", }}>{ name }</Header>
      </div>
    </div>
  </div>
)

const styles = {
  complete: {
    textDecoration: "line-through",
    color: "grey",
  },
  pointer: {
    cursor: "pointer",
  },
  flex: {
    display: "flex",
    alignItems: "center",
  },
};

export default Menu;
