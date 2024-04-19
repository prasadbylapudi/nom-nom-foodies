import React, { useState, useEffect } from "react";

function User() {
  const [name, setName] = useState("ram");
  const [name1, setName2] = useState("hih");

  useEffect(() => {}, [name]);
  return (
    <div>
      <div className="userCard">
        <h3>{name}</h3>
        <button
          onClick={() => {
            setName("rasadf");
          }}
        >
          update
        </button>
        <p>andhra pradesh</p>
      </div>
    </div>
  );
}

export default User;
