import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const SearchField = () => {
  return (
    <View className="w-full mt-10 border-2 rounded-xl border-black-200 h-16 bg-black-100">
      <TextInput
        className="flex-1 text-white w-full font-psemibold text-base"
        value={form.email}
        placeholder="Search Here"
        placeholderTextColor="#7B7B8B"
      />
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({});
