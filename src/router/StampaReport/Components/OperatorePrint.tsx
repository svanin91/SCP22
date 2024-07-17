import { Text, View, StyleSheet } from "@react-pdf/renderer";

const PrintOperatore = (props: any) => {
  const styles = StyleSheet.create({
    container: {},
    sectionOperatore: {
      fontSize: 12,
      display: "flex",
      flexDirection: "column",
      padding: 5,
    },
    title: { fontSize: 18 },
    result: { fontSize: 11 },
    item: { paddingVertical: 2 },
  });

  const operatorStatistics = props.operatorStatistics;

  return (
    <View style={styles.container}>
      <View style={styles.sectionOperatore}>
        <View style={styles.title}>
          <Text>Operatore</Text>
        </View>
        <View style={styles.result}>
          {Object.entries(operatorStatistics).map(([operator, count]) => (
            <View style={styles.item}>
              <Text>
                {operator.toString()}: {count.toString()}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};
export default PrintOperatore;
