import React from "react";
import styles from "./Hello.module.css";
async function Hello() {
  "use cache";
  console.log("STYLES:", styles);
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");

  const data = await response.json();

  return (
    <section className={styles.shelf}>
      <h2 className={styles.heading}>Albums</h2>
      <div className={styles.grid}>
        {data.map((item: { id: number; title: string }) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.cover}>{item.title[0]}</div>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.meta}>Album • #{item.id}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Hello;
