import { Text, View, StyleSheet } from "@react-pdf/renderer";

const PrintVerifiche = (props: any) => {
  const styles = StyleSheet.create({
    container: {},
    sectionVerificheEffettuate: {
      fontSize: 20,
      display: "flex",
      flexDirection: "column",
      padding: 5,
    },
    title: { fontSize: 18 },
    result: { fontSize: 11 },
    item: { paddingVertical: 2 },
  });

  const checksStatistics = props.checksStatistics;

  return (
    <View style={styles.container}>
      <View style={styles.sectionVerificheEffettuate}>
        <View style={styles.title}>
          <Text>Controlli</Text>
        </View>
        <View style={styles.result}>
          {Object.entries(checksStatistics).map(([check, count]) => (
            <View style={styles.item}>
              <Text>
                {check.toString()}: {count.toString()}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};
export default PrintVerifiche;
