import { Text, View, StyleSheet } from "@react-pdf/renderer";

const PrintMese = (props: any) => {
  const styles = StyleSheet.create({
    container: {
      fontSize: 12,
      display: "flex",
      flexDirection: "row",
    },
    title: { fontSize: 18 },
    result: { fontSize: 11 },
    item: { paddingVertical: 2 },
    resultAnno: {},
    sectionMese: {
      padding: 5,
    },
    resultMese: {},
  });

  const monthStatistics = props.monthStatistics;

  return (
    <View style={styles.container}>
      <View style={styles.sectionMese}>
        <View style={styles.title}>
          <Text>Mese</Text>
        </View>
        <View style={styles.resultMese}>
          {Object.entries(monthStatistics).map(([mese, count]) => (
            <View style={styles.item}>
              <Text>
                {mese.toString()}: {count.toString()}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};
export default PrintMese;
