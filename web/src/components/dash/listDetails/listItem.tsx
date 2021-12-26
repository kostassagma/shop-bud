import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { OpenListContext } from "..";

interface Props {
  name: string;
  id: string;
  description: string;
}

const ListItem: FC<Props> = ({ name, id, description }) => {
  const openedRoom = useContext(OpenListContext);

  return (
    <div className="border-b group border-gray-400 dark:border-gray-600 p-2 max-w-full w-full relative cursor-pointer">
      <div className="h-full absolute right-0 top-0 p-2 flex flex-row space-x-3 hover:bg-gray-400 dark:hover:bg-gray-800">
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
          <h1 className="text-xl">{name}</h1>
        </div>
      </Link>
    </div>
  );
};

export default ListItem;
