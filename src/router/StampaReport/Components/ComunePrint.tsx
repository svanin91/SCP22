import { Text, View, StyleSheet } from "@react-pdf/renderer";

const PrintComune = (props: any) => {
  const styles = StyleSheet.create({
    container: {
      fontSize: 12,
      display: "flex",
      flexDirection: "row",
    },
    title: { fontSize: 18 },
    result: { fontSize: 11 },
    item: { paddingVertical: 2 },

    resultComune: {},
    sectionComune: {
      padding: 5,
    },
  });
  const municipalityStatistics = props.municipalityStatistics;

  return (
    <View style={styles.container}>
      <View style={styles.sectionComune}>
        <View style={styles.title}>
          <Text>Comune</Text>
        </View>
        <View style={styles.resultComune}>
          {Object.entries(municipalityStatistics).map(([comune, count]) => (
            <View style={styles.item}>
              <Text>
                {comune.toString()}: {count.toString()}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};
export default PrintComune;
