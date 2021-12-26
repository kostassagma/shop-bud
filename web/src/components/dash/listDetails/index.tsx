import React, { FC, useContext, useEffect, useState } from "react";
import { OpenListContext } from "..";
import ListInList from "./listItem";

interface List {
  name: string;
  id: string;
  description: string;
}

const ListDetailsTab: FC = () => {
  const [myLists, setMyLists] = useState<List[]>([]);
  const [newRoom, setNewRoom] = useState("");
  const [newRoomErr, setNewRoomErr] = useState("");
  const { id } = useContext(OpenListContext);

  useEffect(() => {
    setMyLists([
      {
        name: "Groceries",
        description: "My Market",
        id: "hello",
      },
      {
        name: "Groceries",
        description: "My Market",
        id: "hello2",
      },
    ]);
  }, []);

  useEffect(() => {
    console.log(id);
  }, [id])

  return (
    <div
      style={{ maxHeight: "inherit" }}
      className="rounded-md shadow-md p-5 w-full h-full max-h-full flex flex-col bg-slate-100 dark:bg-slate-900 dark:text-white overflow-y-auto"
    >
      <h1 className="text-3xl font-bold mb-1">Groceries</h1>
      <div className="h-full overflow-y-scroll">
        {myLists.map((e) => (
          <ListInList
            key={e.id}
            id={String(e.id)}
            name={e.name}
            description={e.description}
          />
        ))}
      </div>
      <form
        className="rounded space-x-2 flex flex-row mt-3"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex-1">
          <input
            value={newRoom}
            className={`shadow appearance-none h-full ${
              newRoomErr ? "border-red-500" : ""
            } rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-white text-gray-700 dark:bg-black dark:text-gray-300`}
            id="item"
            type="text"
            placeholder="shoes"
            onChange={(e) => {
              setNewRoom(e.target.value);
              setNewRoomErr("");
            }}
          />
        </div>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Item
          </button>
        </div>
      </form>
      <p className="text-red-500 text-xs italic">{newRoomErr}</p>
    </div>
  );
};

export default ListDetailsTab;
