"use client"
import * as React from "react"

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Button } from "@/components/ui/button"
import { useState } from 'react'
import { Input } from "@/components/ui/input"



interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const table = useReactTable({
    data,
    columns,
    state: {
        sorting,
        columnFilters
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
  })

  return (
    <>
    <div className="flex items-center justify-between">
        <h1>filtros: </h1>
        <div className="flex items-center py-4">
            <Input
            placeholder="Busca cliente"
            value={(table.getColumn("Cliente")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
                table.getColumn("Cliente")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
            />
        </div>
        <div className="flex items-center py-4">
            <Input
            placeholder="Inicio de jornada (H:M:S)"
            value={(table.getColumn("HoraInicioJornada")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
                table.getColumn("HoraInicioJornada")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
            />
        </div>
        <div className="flex items-center py-4">
            <Input
            placeholder="Hora de llegada (H:M:S)"
            value={(table.getColumn("HoraLlegadaCliente")?.getFilterValue() as number)}
            onChange={(event) =>
                table.getColumn("HoraLlegadaCliente")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
            />
        </div>
    </div>


    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
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
                  <TableCell key={cell.id}>
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
    <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Anterior
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Siguiente
        </Button>
      </div>
    </>
  )
}
