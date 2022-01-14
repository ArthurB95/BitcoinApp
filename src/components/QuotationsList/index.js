import React, { Fragment } from "react";

import { View, Text, ScrollView, TouchableOpacity } from "react-native";

import styles from "./style";

export default function QuotationsList() {
  return (
    <Fragment>
      <View>
        <TouchableOpacity style={styles.buttonQuery} onPress={() =>}>
          <Text style={styles.textButtonQuery}>7D</Text>
        </TouchableOpacity>
      </View>
      <ScrollView></ScrollView>
    </Fragment>
  );
}
