import React from "react";

import { View, Text } from "react-native";
import styles from "./style";

export default function CurrentPrice() {
  return (
    <View style={styles.headerPrice}>
      <Text>$ 54423.355</Text>
      <Text>Ultima Cotação</Text>
    </View>
  );
}
