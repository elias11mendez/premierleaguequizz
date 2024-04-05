import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Selection = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  };
  return (
    <div className="mt-4 grid place-items-center">
      <button
        onClick={back}
        className=" bg-purple-900 w-60 h-10 rounded-md hover:bg-white hover:text-black"
      >
        Atras
      </button>
      <div className="flex justify-center items-center flex-col mt-5">
        <h1 className="text-6xl font-bold text-center text flex justify-center">
          BIENVENIDO
        </h1>
        {/* <p className="text-2xl mt-20 font-semibold text-center">
        A ESTE QUIZZ DEL BIX SIX
      </p> */}
        <p className="text-2xl mt-2">Elige tu equipo... </p>
        <div className="m-2">
          {/* <button
          className="bg-purple-900 w-60 h-10 rounded-md hover:bg-white hover:text-black"
        >
          INICIAR
        </button> */}
        </div>
        <div className="gap-3 w-80  grid grid-cols-3">
          <Link to={"/liverpool"}>
            <img
              className="w-80 h-48"
              src="https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg"
            />
          </Link>
          <Link to={"/mancity"}>
            <img
              className="w-80 h-48"
              src="https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg"
            />
          </Link>
          <Link to={"/arsenal"}>
            <img
              className="w-80 h-48"
              src="https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg"
            />
          </Link>
          <Link to={"/chelsea"}>
            <img
              className="w-80 h-48"
              src="https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg"
            />
          </Link>
          {/* <Link to={"/united"}>
            <img className="w-50 h-48" src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg" />
          </Link> */}
          <Link to={"/tot"}>
            <img
              className="w-80 h-48"
              src="https://upload.wikimedia.org/wikipedia/en/0/05/Spurs_2017_badge.svg"
            />
          </Link>
          <Link to={'/united'} className="w-32 mt-7">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
              alt="tot"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Selection;
