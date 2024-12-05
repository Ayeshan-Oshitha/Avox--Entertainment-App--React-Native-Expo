import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useUser } from "../../context/UserContext";
import { SafeAreaView } from "react-native-safe-area-context";

import { images, icons } from "../../constants";
import SearchField from "../../components/SearchField";

const Home = () => {
  const { user } = useUser();
  return (
    <>
      <SafeAreaView className="bg-primary h-full px-4">
        <View className="justify-between items-center flex-row mx-8 mt-12">
          <View>
            <Text className="font-pmedium text-base text-gray-100 ">
              Welcome Back
            </Text>
            <Text className="text-3xl font-psemibold text-white tracking-widest">
              {user ? user.displayName : ""}
            </Text>
          </View>
          <View>
            <Image
              source={images.logoSmall}
              className="w-9 h-10"
              resizeMode="contain"
            />
          </View>
        </View>

        <SearchField />
      </SafeAreaView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
