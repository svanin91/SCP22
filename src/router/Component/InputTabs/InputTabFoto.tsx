import { useContext, useEffect, useState } from "react";
import InitialStateInterface from "../Interface/InitialStateInterface";
import { AddContext } from "../../../Context/AddControlContext";
import Compressor from "compressorjs";

const InputTabFoto = (props: { statoIniziale?: InitialStateInterface }) => {
  let initialState: InitialStateInterface | undefined = props.statoIniziale;
  const ControlloMyContext = useContext(AddContext);
  const [base64Images, setBase64Images] = useState<string[]>([]); // Specifichiamo il tipo di base64Images come string[]

  useEffect(() => {
    if (props.statoIniziale) {
      initialState = props.statoIniziale;
      const immaginiArray = Object.keys(
        initialState.A4_01_TabRig_Immagini.fieldData
      )
        .filter((key) => key.startsWith("M_immagine_"))
        .map((key) => initialState.A4_01_TabRig_Immagini.fieldData[key]);

      const filteredImages: string[] = immaginiArray.filter(
        (immagine) => immagine !== ""
      );

      // Popoliamo base64Images solo con gli elementi non vuoti di filteredImages
      setBase64Images(filteredImages);
    }
  }, [props.statoIniziale]); // Eseguiamo l'effetto solo quando props.statoInizia

  useEffect(() => {
    base64Images.forEach((base64, index) => {
      switch (index) {
        case 0:
          ControlloMyContext.setA4_01_TabRig_Immagini_M_immagine_01(base64);
          break;
        case 1:
          ControlloMyContext.setA4_01_TabRig_Immagini_M_immagine_02(base64);
          break;
        case 2:
          ControlloMyContext.setA4_01_TabRig_Immagini_M_immagine_03(base64);
          break;
        case 3:
          ControlloMyContext.setA4_01_TabRig_Immagini_M_immagine_04(base64);
          break;
        case 4:
          ControlloMyContext.setA4_01_TabRig_Immagini_M_immagine_05(base64);
          break;
        case 5:
          ControlloMyContext.setA4_01_TabRig_Immagini_M_immagine_06(base64);
          break;
        case 6:
          ControlloMyContext.setA4_01_TabRig_Immagini_M_immagine_07(base64);
          break;
        case 7:
          ControlloMyContext.setA4_01_TabRig_Immagini_M_immagine_08(base64);
          break;
        case 8:
          ControlloMyContext.setA4_01_TabRig_Immagini_M_immagine_09(base64);
          break;
        case 9:
          ControlloMyContext.setA4_01_TabRig_Immagini_M_immagine_10(base64);
          break;
        case 10:
          ControlloMyContext.setA4_01_TabRig_Immagini_M_immagine_11(base64);
          break;
        case 11:
          ControlloMyContext.setA4_01_TabRig_Immagini_M_immagine_12(base64);
          break;
        case 12:
          ControlloMyContext.setA4_01_TabRig_Immagini_M_immagine_13(base64);
          break;
        case 13:
          ControlloMyContext.setA4_01_TabRig_Immagini_M_immagine_14(base64);
          break;
        case 14:
          ControlloMyContext.setA4_01_TabRig_Immagini_M_immagine_15(base64);
          break;
        case 15:
          ControlloMyContext.setA4_01_TabRig_Immagini_M_immagine_16(base64);
          break;
        case 16:
          ControlloMyContext.setA4_01_TabRig_Immagini_M_immagine_17(base64);
          break;
        case 17:
          ControlloMyContext.setA4_01_TabRig_Immagini_M_immagine_18(base64);
          break;
        case 18:
          ControlloMyContext.setA4_01_TabRig_Immagini_M_immagine_19(base64);
          break;
        case 19:
          ControlloMyContext.setA4_01_TabRig_Immagini_M_immagine_20(base64);
          break;
        case 20:
          ControlloMyContext.setA4_01_TabRig_Immagini_M_immagine_21(base64);
          break;
        case 21:
          ControlloMyContext.setA4_01_TabRig_Immagini_M_immagine_22(base64);
          break;
        case 22:
          ControlloMyContext.setA4_01_TabRig_Immagini_M_immagine_23(base64);
          break;
        case 23:
          ControlloMyContext.setA4_01_TabRig_Immagini_M_immagine_24(base64);
          break;
        case 24:
          ControlloMyContext.setA4_01_TabRig_Immagini_M_immagine_25(base64);
          break;
        case 25:
          ControlloMyContext.setA4_01_TabRig_Immagini_M_immagine_26(base64);
          break;
        case 26:
          ControlloMyContext.setA4_01_TabRig_Immagini_M_immagine_27(base64);
          break;
        case 27:
          ControlloMyContext.setA4_01_TabRig_Immagini_M_immagine_28(base64);
          break;
        case 28:
          ControlloMyContext.setA4_01_TabRig_Immagini_M_immagine_29(base64);
          break;
        case 29:
          ControlloMyContext.setA4_01_TabRig_Immagini_M_immagine_30(base64);
          break;
        default:
          break;
      }
    });
  }, [base64Images]);

  // Funzione per gestire il trascinamento delle immagini
  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);

    // Leggi le immagini caricate e ottieni il loro codice in base64
    const newBase64Images = [];
    const promises = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const dataURL = e.target.result;
          newBase64Images.push(dataURL);
          resolve();
        };
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
      });
    });

    Promise.all(promises)
      .then(() => {
        setBase64Images([...base64Images, ...newBase64Images]);
      })
      .catch((error) => {
        console.error("Errore durante la lettura delle immagini:", error);
      });
  };

  // Funzione per gestire il caricamento delle immagini dall'input file
  const handleFileInputChange = (e) => {
    const files = Array.from(e.target.files);
    const newBase64Images = [];
    const promises = files.map((file) => {
      return new Promise((resolve, reject) => {
        new Compressor(file, {
          quality: 0.6, // Imposta la qualità dell'immagine compressa
          success(result) {
            const reader = new FileReader();
            reader.onload = (e) => {
              const dataURL = e.target.result;
              const base64WithoutHeader = dataURL.substring(
                dataURL.indexOf(",") + 1
              );
              newBase64Images.push(base64WithoutHeader);
              resolve();
            };
            reader.onerror = (error) => reject(error);
            reader.readAsDataURL(result);
          },
          error(error) {
            reject(error);
          },
        });
      });
    });

    Promise.all(promises)
      .then(() => {
        setBase64Images([...base64Images, ...newBase64Images]);
      })
      .catch((error) => {
        console.error("Errore durante la lettura delle immagini:", error);
      });
  };

  // Funzione per rimuovere un'immagine
  const removeImage = (index) => {
    const updatedBase64Images = [...base64Images];
    updatedBase64Images.splice(index, 1);
    setBase64Images(updatedBase64Images);
  };

  // Funzione per visualizzare le immagini caricate
  const renderImages = () => {
    return base64Images.map((base64, index) => (
      <div
        key={index}
        className="w-44 h-44 flex flex-col justify-between mr-4 mb-4"
      >
        <div className="">
          <img
            src={`data:image/jpeg;base64,${base64}`}
            //src={base64}
            alt={`Immagine ${index}`}
            className="object-cover h-36"
          />
        </div>
        <button onClick={() => removeImage(index)} className="remove-button">
          Rimuovi
        </button>
      </div>
    ));
  };

  return (
    <div
      className="h-full w-full flex flex-col"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <div className="pb-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileInputChange}
          multiple
        />
      </div>
      <div className=" flex flex-wrap">{renderImages()}</div>
    </div>
  );
};
export default InputTabFoto;
