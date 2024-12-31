import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useUser } from "../../context/UserContext";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images, icons } from "../../constants";
import { logout } from "../../lib/firebase";

const Profile = () => {
  const { user } = useUser();
  const LoginSubmit = async () => {
    await logout();
  };

  return (
    <SafeAreaView className="bg-primary h-full px-4">
      <View className="justify-between items-center flex-row mx-4 mt-12">
        <View>
          <Text className="font-pmedium text-base text-gray-100 ">
            Welcome Back
          </Text>
          <Text className="text-3xl font-psemibold text-white tracking-widest">
            {user ? user.displayName : ""}
          </Text>
        </View>
        {/* <View>
          <Image
            source={images.logoSmall}
            className="w-9 h-10"
            resizeMode="contain"
          />
        </View> */}
      </View>
      <View>
        <Text>Profil </Text>
      </View>
      <TouchableOpacity
        className="bg-red-600 mt-7 w-full min-h-[60px] justify-center items-center rounded-xl mb-8"
        onPress={LoginSubmit}
      >
        <Text className="text-white font-psemibold text-lg">Log out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
