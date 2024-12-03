import Form from "next/form";
import { addDeveloperAction } from "../actions";
import { Pencil } from "lucide-react";

export function FormInfo() {
  return (
    <Form action={addDeveloperAction}>
      <input type="text" name="name" />
      <input type="text" name="title" />
      <input type="text" name="bio" />
      <Pencil type="submit" />
    </Form>
  );
}
