import { Text, View, StyleSheet } from "@react-pdf/renderer";

const PrintAnno = (props: any) => {
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
    sectionAnno: { padding: 5 },
  });

  const yearStatistics = props.yearStatistics;

  return (
    <View style={styles.container}>
      <View style={styles.sectionAnno}>
        <View style={styles.title}>
          <Text>Anno</Text>
        </View>
        <View style={styles.resultAnno}>
          {Object.entries(yearStatistics).map(([anno, count]) => (
            <View style={styles.item}>
              <Text>
                {anno.toString()}: {count.toString()}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};
export default PrintAnno;
