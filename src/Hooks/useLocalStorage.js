import React from "react";

const actionTypes = {
  error: "ERROR",
  success: "SUCCESS",
  save: "SAVE",
  sincronize: "SINCRONIZE",
};

const initialState = ({ initialValue }) => ({
  item: initialValue,
  error: false,
  loading: true,
  sincronizedItem: true,
});

/**
 * Custom Hook para el local storage
 * @param {string} itemName Nombre del local storage
 * @param {array} initialValue Valores iniciales
 * @return {array}
 */
function useLocalStorage(itemName, initialValue) {
  const reducerObject = (state, payload) => ({
    [actionTypes.error]: { ...state, error: true },
    [actionTypes.success]: {
      ...state,
      item: payload,
      loading: false,
      sincronizedItem: true,
    },
    [actionTypes.save]: { ...state, item: payload },
    [actionTypes.sincronize]: {
      ...state,
      loading: true,
      sincronizedItem: false,
    },
  });

  const reducer = (state, action) => {
    return reducerObject(state, action.payload)[action.type] ?? state;
  };

  const [state, dispatch] = React.useReducer(
    reducer,
    initialState({ initialValue })
  );

  const { sincronizedItem, error, loading, item } = state;

  // Action creators
  const onError = (error) => {
    dispatch({ type: actionTypes.error, payload: error });
  };
  const onSuccess = (parsedItem) => {
    dispatch({ type: actionTypes.success, payload: parsedItem });
  };
  const onSave = (item) => {
    dispatch({ type: actionTypes.save, payload: item });
  };
  const onSincronize = () => dispatch({ type: actionTypes.sincronize });

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
        onSuccess(parsedItem);
      } catch (error) {
        onError(error);
      }
    }, 3000);
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    try {
      onSave(newItem);
      localStorage.setItem(itemName, JSON.stringify(newItem));
    } catch (error) {
      onError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem: onSincronize,
  };
}

export { useLocalStorage };
