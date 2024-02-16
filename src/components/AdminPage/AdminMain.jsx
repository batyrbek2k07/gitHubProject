import React, { useState } from "react";
import { useProduct } from "../context/ProductContext";

const AdminMain = () => {
  const { addProduct } = useProduct();
  const [file, setfile] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [categotia, setCategotia] = useState("");
  const [description, setDescription] = useState("");

  function handleChane() {
    let newObj = {
      name: name,
      file: file,
      price: price,
      categotia: categotia,
      description: description,
    };

    addProduct(newObj);
  }
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        height: "46.5vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
        className="adminMainBlocks"
      >
   
        <input type="file" onChange={(e) => setfile(e.target.value)} />
        <div
          style={{ display: "flex", flexDirection: "column" }}
          className="adminMainBlock"
        >
          <input
            style={{ width: "400px" }}
            type="text"
            placeholder="Porduct Name"
            onChange={(e) => setName(e.target.value)}
          />
          <div
            style={{ display: "flex", alignItems: "center", gap: " 10px" }}
            className="adminMainBlockInputPriceCategoria"
          >
            <input
              style={{ width: "186px" }}
              type="text"
              placeholder="categoria"
              onChange={(e) => setCategotia(e.target.value)}
            />
            <input style={{ width: "186px" }} type="text" placeholder="Price" />
          </div>
          <div
            style={{
              width: "400px",
              border: "1px solid #161616",
              overflow: "hidden",
            }}
            className="blockTextEarae"
          >
            <textarea
              id="textareaInput"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Product Description"
            />
          </div>
          <button onClick={handleChane} style={{ width: "420px" }}>
            save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminMain;
