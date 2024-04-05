import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import Welcome from "../components/Welcome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Main = () => {
  return (
    <>
      <Link to={'https://github.com/elias11mendez'}> 
        <FontAwesomeIcon
          className="ml-auto pb-7 h-8"
          icon={faGithub}
        />
      </Link>

      <Welcome />
    </>
  );
};
export default Main;
