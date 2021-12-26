import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { OpenListContext } from "..";

interface Props {
  name: string;
  id: string;
  description: string;
}

const ListInList: FC<Props> = ({ name, id, description }) => {
  const openedRoom = useContext(OpenListContext);

  return (
    <div className="border-b group border-gray-400 dark:border-gray-600 p-2 max-w-full w-full relative cursor-pointer hover:bg-gray-300 hover:dark:bg-gray-700">
      {openedRoom.id === id && (
        <div className="absolute left-0 top-1.5 h-12 w-1 bg-blue-500 dark:bg-blue-800 rounded-r-md" />
      )}
      <div className="h-full absolute right-0 top-0 p-4 flex flex-row space-x-3 hover:bg-gray-400 dark:hover:bg-gray-800 ">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="trash"
          className="h-full sm:opacity-0 group-hover:opacity-100 dark:text-gray-300"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"
          ></path>
        </svg>
      </div>
      <Link to={`/app/${id}`}>
        <div className="max-w-full">
          <h1 className="text-lg">{name}</h1>
          <p className="text-xs text-gray-700 dark:text-gray-300 truncate">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default ListInList;
