import icons from "@/constants/icons";
import images from "@/constants/images";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Signin = () => {
  return (
    <SafeAreaView className="bg-white h-full ">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          resizeMode="contain"
          className="w-full h-4/6"
        />
        <View className="px-10 flex flex-col items-center justify-center">
          <Text className="text-center text-base uppercase font-rubik text-black-200">
            Welcome to Estate-Explorer
          </Text>
          <Text className="text-center text-3xl text-black font-rubik-bold mt-2 mb-7">
            Let&apos;s get you closer to {"\n"}
            <Text className="text-primary-3">Your dream house</Text>
          </Text>
          <Text className="text-center text-lg tracking-wider text-black-200 font-rubik mt-2">
            Sign in to continue to Estate-Explorer
          </Text>
          <TouchableOpacity className="flex flex-row items-center justify-center w-11/12 bg-transparent border border-black-200 gap-x-3 shadow-lg rounded-full mt-6 py-2">
            <Image
              source={icons.google}
              resizeMode="contain"
              className="h-6 w-6 bg-transparent"
            />
            <Text className="text-xl text-black font-rubik-semibold py-2">
              Sign in with Google
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signin;
