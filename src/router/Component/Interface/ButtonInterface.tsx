interface ButtonProps {
  titolo: string;
  link: string;
  key: number;
  filtro?: any;
  report?: any;
  numeroControllo?: string;
  idControllo?: {
    A_09a_livello_di_revisione?: number;
    A_51a_numero_documento?: string;
  };
  controllo?: any;
}
export default ButtonProps;
