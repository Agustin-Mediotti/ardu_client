import { LineChart } from "react-native-gifted-charts";
import { View } from "react-native";

const PressureChart = ({ data }) => {
  return (
    <View>
      <LineChart
        areaChart
        height={150}
        curved
        isAnimated
        dataPointsColor1="#050a14"
        dataPointsRadius1={3}
        animationDuration={1200}
        startFillColor="#0BA5A4"
        startOpacity={0.8}
        endOpacity={0.2}
        initialSpacing={3}
        data={data}
        pointerConfig={{
          pointerColor: "#9ab2df",
          showPointerStrip: false,
          radius: 6,
        }}
        animateOnDataChange
        onDataChangeAnimationDuration={300}
        noOfSections={3}
        spacing={30}
        thickness={5}
        hideRules
        yAxisTextStyle={{ color: "#fff" }}
        yAxisColor="#0BA5A4"
        verticalLinesColor="rgba(14,164,164,0.5)"
        xAxisColor="#0BA5A4"
        color="#050a14"
      />
    </View>
  );
};

export default PressureChart;
