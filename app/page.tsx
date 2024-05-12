
'use client'
import Image from 'next/image'
import Head from 'next/head'
import { NextResponse } from 'next/server'

import {  useRef, useState, useEffect  } from 'react';
import { DatosViajes } from './types';

import { Viajes, columns } from './columns'

import { DataTable} from './data-table'
import { RefreshCcw } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

import Header from '../components/ui/header'



export default function Home() {
  const [resultadosFiltrados, setResultadosFiltrados] = useState<DatosViajes[]>([]);
  const [viajesFinalizados, setViajesFinalizados] = useState([]);
  const [viajesEnCurso, setViajesEnCurso] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  useEffect(() => {
    const getData = async () => {
      try {
        const Data = await fetch("/api", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const DataJson = await Data.json();
        const resultadosFiltrados = DataJson.data.results.filter((resultado: DatosViajes) => resultado.UserName !== "prueba");
        setResultadosFiltrados(resultadosFiltrados);
        const viajesFinalizados = DataJson.data.results.filter((resultado: DatosViajes) => resultado.HoraFinEntrega  !== null);
        const cantidadViajesFinalizados = viajesFinalizados.length;
        setViajesFinalizados(cantidadViajesFinalizados);
        const viajesEnCurso = DataJson.data.results.filter((resultado: DatosViajes) => resultado.HoraConfirmacionFolio  !== null && resultado.HoraLlegadaCliente  == null );
        const cantidadviajesEnCurso = viajesEnCurso.length;
        setViajesEnCurso(cantidadviajesEnCurso);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  // Calcular índices de inicio y fin de los resultados a mostrar en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = resultadosFiltrados.slice(indexOfFirstItem, indexOfLastItem);

  // Cambiar de página
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
      <section className="py-24"> 
        <div className="container">
          <Header />
          <br>
          </br>
          <h1 className="font-bold">
            Resumen de viajes
          </h1>
          <br>
          </br>
          <Alert style={{  border: '1px solid #014a3b'}}>
            <div className="h-2 w-2" />
            <AlertTitle style={{  color: '#014a3b'}}>Viajes Finalizados <span>&#10003;</span></AlertTitle>
            <AlertDescription>
              Se han finalizado {viajesFinalizados} viajes
            </AlertDescription>
          </Alert>
          <br>
          </br>
          <Alert style={{  border: '1px solid #c3b819'}}>
            <div className="h-2 w-2" />
            <AlertTitle style={{  color: '#c3b819'}}>Viajes Pendientes <span>&#9888;</span></AlertTitle>
            <AlertDescription>
              Hay {viajesEnCurso} viajes en curso
            </AlertDescription>
          </Alert>
          <br>
          </br>
            <DataTable columns = {columns} data = {resultadosFiltrados} />
        </div>
        
      </section>
  );
}



