import {  useNavigate } from "react-router-dom";
const Welcome = () => {
  const navigate = useNavigate();
  const toQuiz = () => {
    navigate("/selection");
  };
  return (
    <div className="flex justify-center items-center flex-col m-9 ">
      <h1 className="text-6xl font-bold text-center text flex justify-center">
        BIENVENIDO
      </h1>
      <p className="text-2xl mt-20 font-semibold text-center">
        A ESTE QUIZZ DEL BIG SIX
      </p>
      <p className="text-2xl mt-10">Clic en Iniciar... </p>
      <div className="m-10">
       <button
          onClick={toQuiz}
          className="bg-purple-900 w-60 h-10 rounded-md hover:bg-white hover:text-black"
        >
          INICIAR
        </button>
      </div>
      <img className="bg-white w-52 h-52 rounded-full" src="https://dorve.com/wp-content/uploads/2023/08/overlap-premier-league-logo.png"/>
    </div>
  );
};
export default Welcome;
