import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import React from "react";

import { icons } from "../constants";

const SearchField = () => {
  return (
    <View className="w-full flex flex-row justify-between items-center mt-10 border-2 rounded-xl border-black-200 h-16 bg-black-100 px-2 mb-6">
      <TextInput
        className="flex-1 text-white w-full font-psemibold text-base"
        placeholder="Search Here"
        placeholderTextColor="#7B7B8B"
      />
      <Image source={icons.search} className="w-6 h-6" resizeMode="contain" />
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({});
