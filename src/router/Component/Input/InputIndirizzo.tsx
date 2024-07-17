import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Option } from "react-google-places-autocomplete/build/types";
import { SingleValue } from "react-select";

const InputIndirizzo = (props: {
  thisState: string;
  thisSetState: React.Dispatch<React.SetStateAction<string>>;
  initial?: string;
}) => {
  const { thisState, thisSetState, initial } = props;
  const [value, setValue] = useState<SingleValue<Option>>();
  // Verifica se initial è definito e imposta il valore iniziale (INITIAL é IL VALORE UTILIZZATO IN MODIFICA NEL CASO SIA STATO PRECEDENTEMENTE COMPILATO IL CAMPO)

  useEffect(() => {
    if (initial) {
      thisSetState(initial);
    }
  }, [initial, thisState, thisSetState]);

  useEffect(() => {
    if (value?.value && value.value.structured_formatting.main_text) {
      thisSetState(value.value.structured_formatting.main_text);
    }
  }, [value, thisSetState]);

  return (
    <div className="relative">
      <GooglePlacesAutocomplete
        apiKey="AIzaSyCA_zQQaCxu_JnMJ3iXMEIunn3jqoidBSg"
        apiOptions={{ language: "it", region: "it" }}
        autocompletionRequest={{
          types: ["address"],
          componentRestrictions: {
            country: ["it"],
          },
        }}
        selectProps={{
          placeholder: initial ? initial : "Indirizzo",
          value,
          onChange: setValue,
          className: " w-full rounded-lg text-black  block flex-1 text-sm",
        }}
      />
    </div>
  );
};
export default InputIndirizzo;
