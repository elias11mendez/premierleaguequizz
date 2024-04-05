import { Link } from "react-router-dom";

const Selection = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col ">
        <h1 className="text-6xl font-bold text-center text flex justify-center">
          BIENVENIDO
        </h1>
        {/* <p className="text-2xl mt-20 font-semibold text-center">
        A ESTE QUIZZ DEL BIX SIX
      </p> */}
        <p className="text-2xl mt-10">Elige tu equipo... </p>
        <div className="m-7">
          {/* <button
          className="bg-purple-900 w-60 h-10 rounded-md hover:bg-white hover:text-black"
        >
          INICIAR
        </button> */}
        </div>
        <div className="gap-3  grid grid-cols-3">
          <Link to={"/liverpool"}>
            <img
              className=" w-80 h-48"
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
          <Link to={'/chelsea'}>
            <img
              className="w-80 h-48"
              src="https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg"
            />
          </Link>
          <div className="flex justify-center">
          <Link to={'/tot'}>
            <img className="w-52 h-52 rounded-full"
              src="https://logos-world.net/wp-content/uploads/2020/06/Tottenham-Hotspur-emblem.png"
            />
          </Link>
          </div>
          <Link to={'/united'}>
            <img
              className="w-52 ml-16"
              
              src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
            />
          </Link>
        </div>
      </div>
    </>
  );
};
export default Selection;
