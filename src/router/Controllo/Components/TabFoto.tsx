import React, { useEffect, useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const TabFoto = ({ data }: { data: any }) => {
  const [immagini, setImmagini] = useState<any[]>([]);

  useEffect(() => {
    // Filtra solo le chiavi relative alle immagini e crea un array di oggetti
    const immaginiArray = Object.keys(data)
      .filter((key) => key.startsWith("M_immagine_"))
      .map((key) => {
        // Estrai l'indice dell'immagine
        const indice = key.replace("M_immagine_", "");
        // Estrai il percorso dell'immagine
        const percorso = data[key];
        // Se il percorso non è una stringa vuota, restituisci l'oggetto con indice e percorso
        if (percorso.trim() !== "") {
          return { indice, percorso };
        }
        return null;
      })
      .filter((immagine) => immagine !== null); // Rimuovi eventuali elementi null dall'array
    setImmagini(immaginiArray);
  }, [data]);

  return (
    <div className="w-full h-[43rem] flex flex-wrap">
      {immagini.map((immagine, index) => (
        <Zoom key={index}>
          <img
            className="h-48 w-48 mr-1 bg-red-500"
            key={immagine.indice}
            src={`data:image/jpeg;base64,${immagine.percorso}`}
            alt={`Immagine ${immagine.indice}`}
          />
        </Zoom>
      ))}
    </div>
  );
};
export default TabFoto;
