import { Text, View } from "react-native";
import "./global.css";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-5xl font-quicksand-bold text-center text-primary">
        Welcome to my react native application!
      </Text>
    </View>
  );
}
