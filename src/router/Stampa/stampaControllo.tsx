import {
  pdf,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoggedContext } from "../../Context/LoggedContext";
import { Navigate } from "react-router-dom";
import PrintCartaCircolazione from "./Components/CartaCircolazionePrint";
import PrintDatiTabella from "./Components/DatiTabellaPrint";
import PrintPatente from "./Components/PatentePrint";
import PrintVerificheEffettuate from "./Components/VerificheEffettuatePrint";
import PrintCertificatoAssicurazione from "./Components/CertificatoAssicurazionePrint";
import PrintCartaIdentita from "./Components/CartaIdentitaPrint";
import PrintPassaporto from "./Components/PassaportoPrint";
import PrintNormeViolate from "./Components/NormeViolatePrint";
import PrintDocRitirati from "./Components/DocRitiratiPrint";
import PrintNote from "./Components/NotePrint";
import data from "../../../public/ini/ini.json";

const styles = StyleSheet.create({
  viewer: {
    height: "90vh",
    width: "170vh",
  },
  page: {
    display: "flex",
  },
  sectionTitle: {
    height: 80,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logoEnte: {
    height: 45,
    width: 20,
    flex: 1,
    paddingHorizontal: 10,
  },
  title1: {
    fontSize: 22,
    flex: 7,
    textAlign: "right",
  },
  title2: {
    fontSize: 22,
    flex: 7,
  },
  sectionData: {
    margin: 5,
    padding: 5,
    flexGrow: 1,
  },
  sectionNumeroDoc: { height: 60, display: "flex", alignItems: "center" },
  subTitle: {
    fontSize: 18,
  },
  numberPage: {
    fontSize: 9,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderTop: "2px solid black",
    padding: 10,
  },
});

function StampaControllo() {
  const navigate = useNavigate();
  const location = useLocation();
  const LoggedMyContext = useContext(LoggedContext);

  const controllo = location.state;

  function getDataOggiPerRenameFile() {
    const oggi = new Date();
    const giorno = String(oggi.getDate()).padStart(2, "0");
    const mese = String(oggi.getMonth() + 1).padStart(2, "0"); // I mesi vanno da 0 a 11
    const anno = oggi.getFullYear();

    return `${giorno}-${mese}-${anno}`;
  }

  function GeneraDocumentoPDF() {
    return (
      <Document>
        <Page size="A4" wrap={true} style={styles.page}>
          <View style={styles.sectionTitle} fixed>
            <Text style={styles.title1}>{data.header.Nome_comune}</Text>
            <Image style={styles.logoEnte} src={data.header.Logo_comune} />
            <Text style={styles.title2}>Comando polizia locale</Text>
          </View>
          <View style={styles.sectionData}>
            <View style={styles.sectionNumeroDoc}>
              <Text style={styles.subTitle}>
                Controllo n.{" "}
                {
                  controllo.A2_TabRig_informazioni_generali.fieldData
                    .A_51a_numero_documento
                }
              </Text>
            </View>
            <PrintDatiTabella controllo={controllo} />
            <PrintCartaCircolazione controllo={controllo} />
            <PrintVerificheEffettuate controllo={controllo} />
            <PrintPatente controllo={controllo} />
            <PrintCertificatoAssicurazione controllo={controllo} />
            <PrintCartaIdentita controllo={controllo} />
            <PrintPassaporto controllo={controllo} />
            <PrintNormeViolate controllo={controllo} />
            <PrintDocRitirati controllo={controllo} />
            <PrintNote controllo={controllo} />
          </View>
          <View style={styles.numberPage} fixed>
            <Text>
              Report del controllo n.{" "}
              {
                controllo.A2_TabRig_informazioni_generali.fieldData
                  .A_51a_numero_documento
              }
              {" - "}
              Revisione n.{" "}
              {
                controllo.A2_TabRig_informazioni_generali.fieldData
                  .A_09a_livello_di_revisione
              }
              {" - "}
              Stato del documento :{" "}
              {
                controllo.A2_TabRig_informazioni_generali.fieldData
                  .A_52a_flag_di_corrente_obsoleto
              }
            </Text>
            <Text
              render={({ pageNumber, totalPages }) =>
                `Pagina ${pageNumber} di ${totalPages}`
              }
            />
          </View>
        </Page>
      </Document>
    );
  }

  return (
    <div className="bg-gray-200 w-screen h-screen px-4 pt-16 grid grid-cols-8">
      <div className="col-span-7 w-full h-full ">
        <PDFViewer style={styles.viewer}>{GeneraDocumentoPDF()}</PDFViewer>
      </div>
      <div className="col-span-1 w-full h-full flex flex-col justify-start items-end">
        <button
          onClick={() => {
            navigate("/SCP22");
          }}
          className=" bg-gialloSofitel border-2 border-gialloBordo hover:bg-gialloBordo hover:border-gialloBordo font-medium rounded-lg text-sm px-4 py-2"
        >
          INDIETRO
        </button>
        {/* Bottone per scaricare il PDF */}
        <button
          className="mt-2 bg-gialloSofitel border-2 border-gialloBordo hover:bg-gialloBordo hover:border-gialloBordo font-medium rounded-lg text-sm px-4 py-2"
          onClick={() => {
            const nomeDelFile = `Riepilogo_controllo_${
              controllo.A2_TabRig_informazioni_generali.fieldData
                .A_51a_numero_documento
            }_generato_in_data_${getDataOggiPerRenameFile()}.pdf`;

            pdf(GeneraDocumentoPDF())
              .toBlob()
              .then((blob) => saveAs(blob, nomeDelFile));
          }}
        >
          SCARICA PDF
        </button>
      </div>
    </div>
  );
}
export default StampaControllo;
