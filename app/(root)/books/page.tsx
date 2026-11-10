import { Suspense } from "react";

async function BooksList() {
  const response = await fetch("http://localhost:3000/api/books-server");
  const books = await response.json();
  return <div>{JSON.stringify(books)}</div>;
}

function Books() {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <BooksList />
    </Suspense>
  );
}

export default Books;
