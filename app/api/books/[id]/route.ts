import books from "@/app/api/db";

export async function PUT(
  request: Request,
  context: { params: { id: number } },
) {
  const id = context.params.id;
  const book = await request.json();

  const index = books.findIndex((b) => b.id === id);
  books[index] = book;
  return Response.json(books);
}
