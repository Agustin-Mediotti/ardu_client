import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import dataService from "./services/data";

/* 
  We could associate data in a tuple for example: [ [{value:15}], "2023-09-19 17:58:48.50678"]
*/

const firstRenderData = [{ value: 0 }];

export default function App() {
  const [tempData, setTempData] = useState(firstRenderData);
  const [humData, setHumData] = useState(firstRenderData);
  const [presData, setPresData] = useState(firstRenderData);
  const [dataHistory, setDataHistory] = useState([]);

  const parseData = (res) => {
    let temp = [];
    let hum = [];
    let pres = [];

    temp.push({ value: Number(res[0].temp), label: res[0].created_at });
    hum.push({ value: Number(res[0].hum), label: res[0].created_at });
    pres.push({ value: Number(res[0].pres), label: res[0].created_at });

    console.log(firstRenderData);
    console.log(temp);

    setDataHistory(dataHistory.concat(res));

    setTempData(tempData.concat(temp));
    setPresData(presData.concat(pres));
    setHumData(humData.concat(hum));
  };

  // TODO: Make server-side and try using a public IP or DNS

  useEffect(() => {
    dataService.getAll().then((initialState) => {
      parseData(initialState);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Dashboard tempData={tempData} humData={humData} presData={presData} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282c34",
    alignItems: "center",
    justifyContent: "center",
    // borderColor: "red",
    // borderWidth: 1,
  },
});
