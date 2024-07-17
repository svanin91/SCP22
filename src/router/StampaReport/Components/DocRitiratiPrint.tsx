import { Text, View, StyleSheet } from "@react-pdf/renderer";

const PrintDocumentiRitirati = (props: any) => {
  const styles = StyleSheet.create({
    container: {},
    sectionDocRitirati: {
      fontSize: 12,
      display: "flex",
      flexDirection: "column",
      padding: 5,
    },
    title: { fontSize: 18 },
    result: { fontSize: 11 },
    item: { paddingVertical: 2 },
  });

  const documentsRetiredStatistics = props.documentsRetiredStatistics;

  return (
    <View style={styles.container}>
      <View style={styles.sectionDocRitirati}>
        <View style={styles.title}>
          <Text>Doc. ritirati</Text>
        </View>
        <View style={styles.result}>
          {Object.entries(documentsRetiredStatistics).map(
            ([documento, count]) => (
              <View style={styles.item}>
                <Text>
                  {documento.toString()}: {count.toString()}
                </Text>
              </View>
            )
          )}
        </View>
      </View>
    </View>
  );
};
export default PrintDocumentiRitirati;
