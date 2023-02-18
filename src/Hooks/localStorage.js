import React from "react";

/**
 * Custom Hook para el local storage
 * @param {string} itemName Nombre del local storage
 * @param {array} initialValue Valores iniciales
 * @return {array}
 */
function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  /**
   * Hook que se ejecuta cuando finaliza el render de React
   * @param {function} configuración Función con la lógica del efecto
   * @param {array} dependencias valores reactivos referenciados dentro
   * del código de configuración
   */
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem = initialValue;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  }, []);

  const saveItem = (newItem) => {
    try {
      setItem(newItem);
      localStorage.setItem(itemName, JSON.stringify(newItem));
    } catch (error) {
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };
