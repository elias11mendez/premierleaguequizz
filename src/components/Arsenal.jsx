import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
const Arsenal = ()=>{
    const [preguntas, setPreguntas] = useState([]);
    const [pregunta, setPregunta] = useState(0);
    const [mostrarPuntuacion, setMostrarPuntuacion] = useState(false);
    const [puntuacion, setPuntuacion] = useState(0);
  
    useEffect(() => {
      const obtenerPreguntas = async () => {
        try {
          const response = await axios.get("/arsenal.json");
          setPreguntas(response.data.preguntas);
        } catch (error) {
          console.error("Error cargando preguntas:", error);
        }
      };
  
      obtenerPreguntas();
    }, []);
  
    const respuesta = (opcionSeleccionada) => {
      if (opcionSeleccionada === preguntas[pregunta]?.correctAnswer) {
        setPuntuacion(puntuacion + 1);
      }
      const siguientePregunta = pregunta + 1;
      if (siguientePregunta < preguntas.length) {
        setPregunta(siguientePregunta);
      } else {
        setMostrarPuntuacion(true);
      }
    };
  
    return (
      <div className="items-center justify-center flex flex-col m-9">
        <p className="text-3xl font-bold mb-10">CLIC EN LA RESPUESTA CORRECTA</p>
        <div className="text-center">
          {mostrarPuntuacion ? (
            <div>
              <p className="text-3xl">
                {" "}
                Obtuviste {puntuacion} de {preguntas.length} puntos
              </p>
              <Link to={'/'}>
              <button className="bg-purple-900 m-5 w-80 h-10 rounded-md hover:bg-white hover:text-black"
>
                INICIAR DE NUEVO
              </button>
              </Link>
            </div>
          ) : (
            <>
              <div className="text-2xl m-2">
                <span>Pregunta {pregunta + 1}</span> /{preguntas.length}
              </div>
              <div className="text-3xl font-bold mt-10 text-center">
                <p className="w-80">{preguntas.length > 0 && preguntas[pregunta]?.question}</p>
              </div>
              <div className="flex flex-col">
                {preguntas.length > 0 && preguntas[pregunta]?.options &&
                  preguntas[pregunta]?.options.map((option) => (
                    <button
                      className="bg-red-700  mt-8 h-10 rounded-2xl hover:bg-white hover:text-black"
                      key={option}
                      onClick={() => {
                        respuesta(option);
                      }}
                    >
                      {option}
                    </button>
                  ))}
              </div>
            </>
          )}
        </div>
      </div>
)}
export default Arsenal