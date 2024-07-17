import { useEffect, useState } from "react";

const CheckBoxConducente = (props: {
  thisState: number | undefined;
  thisSetState: React.Dispatch<React.SetStateAction<number | undefined>>;
  initial?: number;
}) => {
  const initial = props.initial;
  const thisSetState = props.thisSetState;
  const [check, setCheck] = useState<boolean>(initial === 1);

  useEffect(() => {
    setCheck(initial === 1);
  }, [initial]);

  const handleChange = () => {
    setCheck(!check);
    thisSetState(check ? 0 : 1);
  };
  return (
    <div className="grid grid-cols-3 ">
      <input
        className="form-checkbox accent-gialloSofitel w-6 h-6"
        type="checkbox"
        onChange={handleChange}
        checked={check}
      />
    </div>
  );
};
export default CheckBoxConducente;
