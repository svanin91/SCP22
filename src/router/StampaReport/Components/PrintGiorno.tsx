import { Text, View, StyleSheet } from "@react-pdf/renderer";

const PrintGiorno = (props: any) => {
  const styles = StyleSheet.create({
    container: {
      fontSize: 12,
      display: "flex",
      flexDirection: "row",
    },
    title: { fontSize: 18 },
    result: { fontSize: 11 },
    item: { paddingVertical: 2 },
    resultGiorno: {},
    sectionGiorno: {
      padding: 5,
    },
  });

  const dayStatistics = props.dayStatistics;

  return (
    <View style={styles.container}>
      <View style={styles.sectionGiorno}>
        <View style={styles.title}>
          <Text>Giorno</Text>
        </View>
        <View style={styles.resultGiorno}>
          {Object.entries(dayStatistics).map(([giorno, count]) => (
            <View style={styles.item}>
              <Text>
                {giorno.toString()}: {count.toString()}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};
export default PrintGiorno;
