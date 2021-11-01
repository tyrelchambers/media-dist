import { useState } from "react";
import _types from "../constants/types";

export const useTypes = () => {
  const [types, setTypes] = useState(_types);
  const [usedTypes, setUsedTypes] = useState([]);

  const setUsedType = (type) => {
    const cloneTypes = [...types];
    const cloneUsedTypes = [...usedTypes];
    const index = cloneTypes.filter((t) => t.value === type.value).index;

    console.log(type);

    cloneTypes.splice(index, 1);
    cloneUsedTypes.push(type);
    setTypes(cloneTypes);
    setUsedTypes(cloneUsedTypes);
  };

  const removeUsedType = (type) => {
    console.log(type, "----");
    const cloneTypes = [...types];
    const cloneUsedTypes = [...usedTypes];
    const index = cloneUsedTypes.filter((t) => t.value === type.value).index;

    console.log(cloneUsedTypes, "----");

    cloneUsedTypes.splice(index, 1);
    cloneTypes.push(type);
    setTypes(cloneTypes);
    setUsedTypes(cloneUsedTypes);
  };

  return {
    types,
    setUsedType,
    usedTypes,
    removeUsedType,
  };
};
