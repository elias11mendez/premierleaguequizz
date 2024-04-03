import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const toQuiz = () => {
    navigate("/quiz");
  };

  return (
    <div className="flex justify-center items-center flex-col m-9 ">
      <h1 className="text-6xl font-bold text-center text-blue-500 flex justify-center">
        BIENVENIDO
      </h1>
      <p className="text-2xl mt-20 font-bold text-center">
        A ESTE QUIZ DE PREGUNTAS Y RESPUESTAS DEL MANCITY
      </p>
      <div className="m-20">
        <button
          onClick={toQuiz}
          className="bg-blue-500 w-60 h-10 rounded-md hover:bg-yellow-200"
        >
          INICIAR
        </button>
      </div>
      <img
        className="w-40"
        src="https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg"
      ></img>
    </div>
  );
};
export default Welcome;
