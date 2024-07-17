import Select from "react-select";

interface Option {
  value: string;
  label: string;
}

const InputCDS = (props: {
  cds: [];
  thisState: string[] | undefined;
  thisSetState: React.Dispatch<React.SetStateAction<string[]>> | undefined;
  initialState?: string[];
  addNormeViolate?: (normaViolata: string) => void;
}) => {
  const { cds, thisState, thisSetState, addNormeViolate } = props;

  const options: Option[] = Array.isArray(cds)
    ? cds.map((item: any) => ({
        value: `${item.fieldData.B_01_codice_articolo} : ${item.fieldData.B_02_titolo_articolo}`,
        label: `${item.fieldData.B_01_codice_articolo} : ${item.fieldData.B_02_titolo_articolo}`,
      }))
    : [];
  /**
   * con questa funzione prendo la varibile contenente il codice della strada ottenuto mediande una chiamata api nella pagina statistiche e per ogni chiave aggiungo ù
   * un item all'array options che mi permette di inserire le opzioni, dall'opzione scelta poi estraggo un value che riutilizzo
   */

  const handleChange = (selectedOption: any) => {
    const normaViolata = selectedOption.value.toLowerCase();
    if (thisSetState) {
      thisSetState((prevState) => [...(prevState || []), normaViolata]);
    }
    if (addNormeViolate) {
      addNormeViolate(normaViolata);
    }
  };
  /*const customOption = (props: any) => {
    return (
      <components.Option {...props}>
        <span style={{ fontWeight: 'bold' }}>{props.data.value.split(" : ")[0]}</span>
        {` : ${props.data.value.split(" : ")[1]}`}
      </components.Option>
    );
  };*/
  return (
    <div>
      <Select
        className=" w-full rounded-lg text-gray-900  block flex-1 text-sm"
        options={options}
        onChange={handleChange}
      />
    </div>
  );
};
export default InputCDS;
