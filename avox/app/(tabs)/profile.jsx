import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView className="bg-primary h-full px-4">
      <View>
        <Text>Profil </Text>
      </View>
      {/* <TouchableOpacity className="bg-secondary mt-7 w-full min-h-[60px] justify-center items-center rounded-xl mb-8">
        <Text>Log out</Text>
      </TouchableOpacity> */}
      <TouchableOpacity className="bg-red-600 mt-7 w-full min-h-[60px] justify-center items-center rounded-xl mb-8">
        <Text className="text-white font-psemibold text-lg">Log out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
