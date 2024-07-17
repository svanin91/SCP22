interface DataNote {
  data: {
    A_51a_numero_documento: string;
    D_30_note: string;
  };
}

const TabNote = (data: DataNote) => {
  const datiNote = data.data;
  return (
    <div className=" h-[43rem] w-full pl-4 pt-4  ">
      <ul className="space-y-1 flex flex-col">
        <li className="flex flex-col">
          <p className="pr-3 text-red-500">Note del controllo:</p>
          {datiNote.D_30_note}
        </li>
      </ul>
    </div>
  );
};
export default TabNote;
