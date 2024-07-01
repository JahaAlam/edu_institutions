import {
  faBaby,
  faHandsHelping,
  faSchool,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapContext } from "../../context/mapContext";

const Categories = () => {
  const navigate = useNavigate();
  const { fetchData } = useContext(MapContext);
  const [activeCategory, setActiveCategory] = useState(null);

  const handleClick = (category) => {
    setActiveCategory(category);
    fetchData(category);
    navigate(`/mapview/${category}`);
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex flex-col items-center">
              <div
                onClick={() => handleClick("school")}
                className="cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faSchool}
                  className={`text-6xl mb-4 ${
                    activeCategory === "school"
                      ? "text-green-500"
                      : "text-blue-500"
                  }`}
                />
                <p
                  className={`text-xl font-bold mb-2 ${
                    activeCategory === "school" ? "text-green-500" : ""
                  }`}
                >
                  School
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div
                onClick={() => handleClick("kindergarten")}
                className="cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faBaby}
                  className={`text-6xl mb-4 ${
                    activeCategory === "kindergarten"
                      ? "text-green-500"
                      : "text-blue-500"
                  }`}
                />
                <p
                  className={`text-xl font-bold mb-2 ${
                    activeCategory === "kindergarten" ? "text-green-500" : ""
                  }`}
                >
                  Kindergarten
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div
                onClick={() => handleClick("child")}
                className="cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faHandsHelping}
                  className={`text-6xl mb-4 ${
                    activeCategory === "child"
                      ? "text-green-500"
                      : "text-blue-500"
                  }`}
                />
                <p
                  className={`text-xl font-bold mb-2 ${
                    activeCategory === "child" ? "text-green-500" : ""
                  }`}
                >
                  Social Child Project
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div
                onClick={() => handleClick("teenager")}
                className="cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faUsers}
                  className={`text-6xl mb-4 ${
                    activeCategory === "teenager"
                      ? "text-green-500"
                      : "text-blue-500"
                  }`}
                />
                <p
                  className={`text-xl font-bold mb-2 ${
                    activeCategory === "teenager" ? "text-green-500" : ""
                  }`}
                >
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
