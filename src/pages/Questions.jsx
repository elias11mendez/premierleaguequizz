import { useState } from "react";

const Questions = () => {
  const [pregunta, setPregunta] = useState(0);
  const [mostrarPuntuacion, setMostrarPuntuacion] = useState(false);
  const [puntuacion, setPuntuacion] = useState(0);

  const preguntas = [
    {
      question: "¿Cuál es la capital de Francia?",
      options: ["Londres", "París", "Madrid"],
      correctAnswer: "París",
    },
    {
      question:
        "¿En qué año ganó la segunda división para ser el primer equipo en ganar un ascenso directo?",
      options: ["Nilo", "Amazonas", "Yangtsé"],
      correctAnswer: "Amazonas",
    },
    {
      question: "¿Cuál es el símbolo químico del oro?",
      options: ["Au", "Ag", "Fe"],
      correctAnswer: "Au",
    },
  ];
  const respuesta = (opcionSeleccionada) => {
    if (opcionSeleccionada === preguntas[pregunta].correctAnswer) {
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
      <div>
        {mostrarPuntuacion ? (
          <div>
            <p className="text-3xl">
              {" "}
              Obtuviste {puntuacion} de {preguntas.length} puntos
            </p>
            <button className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
              INICIAR DE NUEVO
            </button>
          </div>
        ) : (
          <>
            <div className="text-2xl m-2">
              <span>Pregunta {pregunta + 1}</span> /{preguntas.length}
            </div>
            <div className="text-3xl font-bold mt-10 text-center">
              <p className="w-80">{preguntas[pregunta].question}</p>
            </div>
            <div className="flex flex-col">
              {preguntas[pregunta].options.map((option) => (
                <button
                  className="border-2 border-solid border-blue-800 mt-8 h-10 rounded-2xl hover:bg-blue-200"
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
  );
};
export default Questions;
