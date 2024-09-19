import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { BACKGROUND_COLOR } from "../constants";
import {
  WINDOW_WIDTH,
  WINDOW_HEIGHT,
} from "../components/tournament-list-item";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  BlurMask,
  Canvas,
  LinearGradient,
  Rect,
} from "@shopify/react-native-skia";
import { Tournaments } from "@/data";
import TournamentList from "@/components/tournament-list";

const index = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar style="light" />
      <Canvas style={styles.background}>
        <Rect x={0} y={0} width={WINDOW_WIDTH} height={WINDOW_HEIGHT}>
          {/* <BlurMask blur={2} style="normal" /> */}
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: WINDOW_HEIGHT }}
            colors={["transparent", "rgba(0,0,0,0.8)"]}
          />
        </Rect>
      </Canvas>
      <TournamentList data={Tournaments} />
    </GestureHandlerRootView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
});