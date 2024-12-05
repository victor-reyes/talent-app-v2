import { updateBackgroundAction } from "../actions";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import {} from "@/components/ui/dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function EditInfoForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Pencil type="submit" size={16}/>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you´re done.
          </DialogDescription>
        </DialogHeader>
        <form action={updateBackgroundAction}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <input type="text" name={"userId"} defaultValue={1} hidden />
              <label htmlFor="name" className="text-right">
                Name
              </label>
              <input
                name="name"
                placeholder="Peter Duarte"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="username" className="text-right">
                Title
              </label>
              <input placeholder="title" name="title" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="bio" className="text-right">
                Bio
              </label>
              <input placeholder="bio" name="bio" className="col-span-3" />
            </div>
          </div>

          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
