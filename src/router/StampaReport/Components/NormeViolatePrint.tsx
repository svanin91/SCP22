import { Text, View, StyleSheet } from "@react-pdf/renderer";

const PrintNormeViol = (props: any) => {
  const styles = StyleSheet.create({
    container: {},
    sectionNormeViolate: {
      fontSize: 12,
      display: "flex",
      flexDirection: "column",
      padding: 5,
    },
    title: { fontSize: 18 },
    result: { fontSize: 11 },
    item: { paddingVertical: 2 },
  });

  const normsViolatedStatistics = props.normsViolatedStatistics;

  return (
    <View style={styles.container}>
      <View style={styles.sectionNormeViolate}>
        <View style={styles.title}>
          <Text>Norme violate</Text>
        </View>
        <View style={styles.result}>
          {Object.entries(normsViolatedStatistics).map(([norma, count]) => (
            <View style={styles.item}>
              <Text>
                {norma.toString()}: {count.toString()}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};
export default PrintNormeViol;
