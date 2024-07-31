import React from "react";
import { useStorageListener } from "./useStorageListener";

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);

  return show ? (
    <div>
      <p>Hubo un cambio</p>
      <button onClick={() => toggleShow(false)}>Refrescar</button>
    </div>
  ) : null;
}

export { ChangeAlert };
