//import ylakierto from "./ylakierto.json";

const ylakiertoJson = process.env.REACT_APP_YLAKIERTO;
const ylakierto = JSON.parse(ylakiertoJson || "[]");

export const lista_jsonista = () => {
  console.log(
    "Ympäristömuuttuja REACT_APP_YLAKIERTO:",
    process.env.REACT_APP_YLAKIERTO
  );

  const valilista = [];

  for (var i = 0; i < ylakierto.length; i++) {
    const kiertorivi = Object.values(ylakierto[i]);
    valilista.push(kiertorivi[0]);
  }
  const lista = valilista.flat();
  return lista;
};
