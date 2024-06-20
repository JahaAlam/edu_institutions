import {
  faBaby,
  faHandsHelping,
  faSchool,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MapContext } from "../../context/mapContext";

const Categories = () => {
  const navigate = useNavigate();

  const { fetchData } = useContext(MapContext);

  const handleClick = (category) => {
    console.log(`fetch data from category components: ${category}`);
    fetchData(category);

    navigate(`/mapview/${category}`);
  };

  return (
    <>
      <div className="container mx-auto flex justify-center mt-20 ">
        <div className="text-center">
          <div className="flex justify-around">
            <div className="w-1/4">
              <div
                onClick={() => handleClick("school")}
                className="cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faSchool}
                  className="text-blue-500 text-6xl mb-4"
                />
                <p className="text-xl font-bold mb-2"> School</p>
              </div>
            </div>
            <div className="w-1/4">
              <div
                onClick={() => handleClick("kindergarten")}
                className="cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faBaby}
                  className="text-green-500 text-6xl mb-4"
                />
                <p className="text-xl font-bold mb-2">Kindergarten</p>
              </div>
            </div>
            <div className="w-1/4">
              <div
                onClick={() => handleClick("child")}
                className="cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faHandsHelping}
                  className="text-purple-500 text-6xl mb-4"
                />
                <p className="text-xl font-bold mb-2">Social Child Project</p>
              </div>
            </div>
            <div className="w-1/4">
              <div
                onClick={() => handleClick("teenager")}
                className="cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faUsers}
                  className="text-orange-500 text-6xl mb-4"
                />
                <p className="text-xl font-bold mb-2">
                  Social Teenager Project
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
