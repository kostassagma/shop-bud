import React, { FC, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DbContext } from "../../App";

const List: FC = () => {
  const { id } = useParams();
  const { gun } = useContext(DbContext);

  useEffect(() => {
    gun.get(String(id)).on((e) => {
      console.log(e);
    });
  }, [id]);

  return <div>AbGes</div>;
};

export default List;
