import { useEffect, useState } from "react";

const CheckBox = (props: {
  text: string;
  textColor: string;
  thisState: number | undefined;
  thisSetState: React.Dispatch<React.SetStateAction<number | undefined>>;
  initial?: number;
}) => {
  const title = props.text;
  const textColor = props.textColor;
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
    <div className="flex justify-between items-center p-2">
      <label className={`${textColor} mr-4`}>{title}</label>
      <input
        className="form-checkbox accent-gialloSofitel w-6 h-6"
        type="checkbox"
        onChange={handleChange}
        checked={check}
      />
    </div>
  );
};
export default CheckBox;
