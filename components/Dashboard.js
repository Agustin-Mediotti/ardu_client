import { StyleSheet, Text, View } from "react-native";
import TemperatureChart from "./TemperatureChart";
import PressureChart from "./PressureChart";
import HumidityChart from "./HumidityChart";

const customLabel = (val) => {
  return (
    <View style={{ width: 70, marginLeft: 7 }}>
      <Text style={{ color: "white", fontWeight: "bold" }}>{val}</Text>
    </View>
  );
};

const Dashboard = ({ tempData, humData, presData }) => {
  return (
    <View
      style={{
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "space-between",
        paddingTop: 50,
      }}
    >
      <View style={styles.container}>
        <TemperatureChart data={tempData} />
        <Text style={styles.label}>TEMPERATURE</Text>
      </View>
      <View style={styles.container}>
        <HumidityChart data={humData} />
        <Text style={styles.label}>HUMIDITY</Text>
      </View>
      <View style={styles.container}>
        <PressureChart data={presData} />
        <Text style={styles.label}>PRESSURE</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 50,
    fontSize: 15,
  },
});

export default Dashboard;
