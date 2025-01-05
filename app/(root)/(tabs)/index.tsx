import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text className="text-2xl font-rubik-light my-10">
        Welcome to Real Estate
      </Text>
      <Link href={"/profile"} className="text-lg font-rubik-semibold">
        Profile
      </Link>
      <Link href={"/explore"} className="text-lg font-rubik-semibold">
        Explore
      </Link>
      <Link href={"/sign-in"} className="text-lg font-rubik-semibold">
        Signin
      </Link>
      <Link href={"/properties/[id]"} className="text-lg font-rubik-semibold">
        Property
      </Link>
    </SafeAreaView>
  );
}
