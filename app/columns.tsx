"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Viajes = {
    Id: number,
    IdProgramado: number,
    PlantaOrigen: string,
    Cliente: string,
    Patente: string,
    HoraInicioJornada: string,
    HoraConfirmacion: string,
    TaraViaje: number,
    HoraInicioCarga: string,
    LatitudInicioCarga: number,
    LongitudInicioCarga: number,
    HoraFinCarga: string,
    LatitudFinCarga: number,
    LongitudFinCarga: number,
    HoraPesaje: string,
    LatitudPesaje: number,
    LongitudPesaje: number,
    HoraConfirmacionFolio: string,
    LongitudConFolio: number,
    LatitudConFolio: number,
    HoraLlegadaCliente: string,
    LatitudLlegadaCliente: number,
    LongitudLlegadaCliente: number,
    HoraFinEntrega: string,
    LatitudFinEntrega: number,
    LongitudFinEntrega: number,
    PesoConfirmadoManual: number,
    Cancelado: boolean,
    Comentario: string,
    UserName: string
  }

export const columns: ColumnDef<Viajes>[] = [
    {
        accessorKey: "IdProgramado",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                 IdProgramado
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          },
      },
  {
    accessorKey: "Cliente",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
             Cliente
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
  },
  {
    accessorKey: "Patente",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
             Patente
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
  },
  {
    accessorKey: "HoraInicioJornada",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
             Hora de inicio de jornada
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => {
        const date = new Date(row.getValue("HoraInicioJornada"))
        const fecha = date.toLocaleDateString()
        const hora = date.toLocaleTimeString()
    return <div className="text-align center">{fecha}<br></br>{hora}</div>
    }
  },
  {
    accessorKey: "HoraInicioCarga",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
             Hora de inicio de carga
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    cell: ({ row }) => {
        const date = new Date(row.getValue("HoraInicioCarga"))
        const fecha = date.toLocaleDateString()
        const hora = date.toLocaleTimeString()
    return <div className="font-medium">{fecha}<br></br>{hora}</div>
    }
  },
  {
    accessorKey: "HoraLlegadaCliente",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
             Hora de llegada
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    cell: ({ row }) => {
        const date = new Date(row.getValue("HoraLlegadaCliente"))
        const fecha = date.toLocaleDateString()
        const hora = date.toLocaleTimeString()
        return <div className="font-medium">{fecha}<br></br>{hora}</div>
      }
  },
  {
    accessorKey: "PlantaOrigen",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
             Planta de origen
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
  },
  {
    accessorKey: "HoraFinEntrega",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
             Hora de entrega
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => {
        const date = new Date(row.getValue("HoraFinEntrega"))
        const fecha = date.toLocaleDateString()
        const hora = date.toLocaleTimeString()
    return <div className="font-medium">{fecha}<br></br>{hora}</div>
    }
  },
  {
    accessorKey: "PesoConfirmadoManual",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
             Peso Confirmado
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
  },
  {
    accessorKey: "UserName",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
             Nombre de usuario
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
  },
  
]
