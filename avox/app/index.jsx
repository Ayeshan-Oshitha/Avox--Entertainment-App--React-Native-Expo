import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { images } from "../constants";

export default function Index() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full items-center justify-center h-full px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[400px] h-[400px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Unleash Infinite{"\n"}
              Sound with <Text className="text-secondary-200">avox</Text>
            </Text>
          </View>
          <Text className="text-base font-pregular text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>
          <TouchableOpacity
            onPress={() => router.push("sign-in")}
            className="bg-secondary mt-7 w-full min-h-[60px] justify-center items-center rounded-xl mb-8"
          >
            <Text className="text-primary font-psemibold text-lg">
              Continue with Email
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#151515" style="light" />
    </SafeAreaView>
  );
}
