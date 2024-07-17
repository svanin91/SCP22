import ButtonProps from "./Interface/ButtonInterface";
import { useNavigate, NavigateOptions } from "react-router-dom";

const Button: React.FC<ButtonProps> = (props) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(`${props.link}`, {
          state: {
            controllo: props.controllo,
            title: props.titolo,
            A_51a_numero_documento: props.numeroControllo,
            A_09a_livello_di_revisione: props.idControllo,
            numeroControllo: props.numeroControllo,
            report: props.report,
            filtro: props.filtro,
          },
          controllo: props.controllo,
          replace: true, // Rendi replace un booleano
        } as NavigateOptions); // Esplicitamente tipizza come NavigateOptions
      }}
      className=" bg-gialloSofitel border-2 border-gialloBordo hover:bg-gialloBordo hover:border-gialloBordo font-medium rounded-lg text-sm px-4 py-2"
    >
      {props.titolo}
    </button>
  );
};

export default Button;
