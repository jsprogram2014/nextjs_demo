"use client";

import React from "react";

async function Hello() {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");

  const data = await response.json();

  return (
    <div>
      {data.map((item: { id: number; title: string }) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}
export default Hello;
