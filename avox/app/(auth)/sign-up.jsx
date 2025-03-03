import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { images, icons } from "../../constants";
import { createAccount } from "../../lib/firebase";

const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};

    if (!form.username.trim()) {
      newErrors.username = "Username is required.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const SignUpsubmit = async () => {
    if (!validateForm()) return;
    setIsSubmitting(true);
    setErrorMessage("");
    console.log("Inside Sign Up function");
    try {
      await createAccount(form.username, form.email, form.password);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full items-center justify-center min-h-[80vh] px-4 my-6">
          <Image
            source={images.logo}
            className="w-[130px] h-[35px]"
            resizeMode="contain"
          />
          <Text className="text-2xl text-white mt-10 font-psemibold">
            Sign up to Avox
          </Text>

          <View className="space-y-2 mt-20 ">
            <Text className="text-base text-gray-100 font-pmedium mb-2">
              User Name
            </Text>
            <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center">
              <TextInput
                className="flex-1 text-white w-full font-psemibold text-base"
                value={form.username}
                placeholder="Enter e-mail hete"
                placeholderTextColor="#7B7B8B"
                onChangeText={(e) => setForm({ ...form, username: e })}
              />
            </View>
            {errors.username && (
              <Text className="text-red-500 text-base mt-1">
                {errors.username}
              </Text>
            )}
          </View>

          <View className="space-y-2 mt-7 ">
            <Text className="text-base text-gray-100 font-pmedium mb-2">
              Email
            </Text>
            <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center">
              <TextInput
                className="flex-1 text-white w-full font-psemibold text-base"
                value={form.email}
                placeholder="Enter e-mail hete"
                placeholderTextColor="#7B7B8B"
                onChangeText={(e) => setForm({ ...form, email: e })}
              />
            </View>
            {errors.email && (
              <Text className="text-red-500 text-base mt-1">
                {errors.email}
              </Text>
            )}
          </View>

          <View className="space-y-2 mt-7 ">
            <Text className="text-base text-gray-100 font-pmedium mb-2">
              Password
            </Text>
            <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center justify-between">
              <TextInput
                className="flex-1 text-white w-full font-psemibold text-base"
                value={form.password}
                placeholder="Enter e-mail hete"
                placeholderTextColor="#7B7B8B"
                onChangeText={(e) => setForm({ ...form, password: e })}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Image
                  source={!showPassword ? icons.eye : icons.eyehide}
                  className="w-6 h-6"
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            {errors.password && (
              <Text className="text-red-500 text-base mt-1">
                {errors.password}
              </Text>
            )}
          </View>

          <TouchableOpacity
            onPress={SignUpsubmit}
            className="bg-secondary mt-16 w-full min-h-[60px] justify-center items-center rounded-xl mb-8"
          >
            <Text className="text-primary font-psemibold text-lg">Sign Up</Text>
          </TouchableOpacity>

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Have an account already ?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
