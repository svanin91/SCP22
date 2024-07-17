import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Option } from "react-google-places-autocomplete/build/types";
import { SingleValue } from "react-select";

const InputComune = (props: {
  thisState: string;
  thisSetState: React.Dispatch<React.SetStateAction<string>>;
  initial?: string;
}) => {
  const { thisState, thisSetState, initial } = props;
  const [value, setValue] = useState<SingleValue<Option>>();
  // Verifica se initial è definito e imposta il valore iniziale (INITIAL é IL VALORE UTILIZZATO IN MODIFICA NEL CASO SIA STATO PRECEDENTEMENTE COMPILATO IL CAMPO)

  useEffect(() => {
    if (initial) {
      //setValue({ label: initial, value: initial });
      thisSetState(initial);
    }
  }, [initial, thisState, thisSetState]);

  useEffect(() => {
    if (value?.value && value.value.structured_formatting.main_text) {
      console.log(value);

      // Usa value.value.structured_formatting.main_text se definito, altrimenti usa ""
      thisSetState(value.value.structured_formatting.main_text);
    }
  }, [value, thisSetState]);

  return (
    <div className="relative">
      <GooglePlacesAutocomplete
        apiKey="AIzaSyCA_zQQaCxu_JnMJ3iXMEIunn3jqoidBSg"
        apiOptions={{ language: "it", region: "it" }}
        autocompletionRequest={{
          types: ["(regions)"],
          componentRestrictions: {
            country: ["it"],
          },
        }}
        selectProps={{
          placeholder: initial ? initial : "Comune", // Imposta il placeholder solo se initial non è definito
          value,
          onChange: setValue,
          className: "w-full rounded-lg text-black  block flex-1 text-sm",
        }}
      />
    </div>
  );
};
export default InputComune;
