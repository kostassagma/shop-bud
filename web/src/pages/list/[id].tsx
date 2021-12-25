import React, { FC, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DbContext } from "../../App";

const Team: FC = () => {
  const { id } = useParams();
  const { gun } = useContext(DbContext);

  useEffect(() => {
    console.log(typeof id);

    //@ts-ignore
    gun.get(id).on((e) => {
      console.log(e);
    });
  }, [id]);

  return <div>About</div>;
};

export default Team;
