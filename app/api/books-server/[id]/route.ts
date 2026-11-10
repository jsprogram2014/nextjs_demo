import books from "@/app/api/db";

type Context = { params: Promise<{ id: string }> };
export async function GET(request: Request, context: Context) {
  const id = +(await context.params).id;
  const index = books.findIndex((b) => b.id === id);
  return Response.json(books[index]);
}

export async function PUT(request: Request, context: Context) {
  const id = +(await context.params).id;
  const book = await request.json();

  const index = books.findIndex((b) => b.id === id);
  books[index] = book;
  return Response.json(books);
}

export async function DELETE(request: Request, context: Context) {
  const id = +(await context.params).id;
  const index = books.findIndex((b) => b.id === id);
  books.splice(index, 1);
  return Response.json(books);
}
