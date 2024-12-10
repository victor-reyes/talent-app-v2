"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CircleUserRound, Ellipsis, Pencil, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Arrow } from "@radix-ui/react-dropdown-menu";
import { Switch } from "@/components/ui/switch";

export type Developer = {
  name: string;
  jobStatus: string;
  until: Date;
  published: boolean;
};

const columns: ColumnDef<Developer>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "jobStatus",
    header: "Status",
  },
  {
    accessorKey: "until",
    header: "Hired by",
    cell: ({ row }) => {
      const date = row.getValue("until") as Date;

      const swedishFormatter = new Intl.DateTimeFormat("sv-SE");
      const formattedDate = swedishFormatter.format(date);

      return <div className="text-slate-600">{formattedDate}</div>;
    },
  },
  {
    id: "published_status",
    header: "Published",
    cell({ row }) {
      const published = row.getValue("published_status") as boolean;
      return <Switch className="scale-[0.6]" />;
    },
  },
  {
    id: "actions",
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Ellipsis size={16} />
          </DropdownMenuTrigger>
          <DropdownMenuContent side="left" className="min-w-24">
            <Arrow />
            <DropdownMenuItem>
              <CircleUserRound />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="flex">
              <Pencil />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Trash />
              Remove
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    className="px-1 font-serif text-slate-900 text-xs"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="px-1 text-xs">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export function UserTable({ data }: { data: Developer[] }) {
  return (
    <div className="container mx-auto py-2">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
