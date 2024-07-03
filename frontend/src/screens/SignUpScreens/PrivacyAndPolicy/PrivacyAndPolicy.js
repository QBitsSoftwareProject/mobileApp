import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const PrivacyAndPolicy = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.navigate(route.params.prevScreen);
  };

  return (
    <ScrollView>
      <TouchableOpacity onPress={handleBackPress}>
        <Image
          source={require("../../../assets/images/blackBack.png")}
          style={{ margin: 25 }}
        />
      </TouchableOpacity>

      <View style={{ paddingHorizontal: 25 }}>
        <Text style={styles.description}>
          Please read our Privacy Policy carefully before using our app. By
          clicking "Agree," you accept the terms of our Privacy Policy.
        </Text>

        <Text style={styles.title}>1. Information We Collect</Text>
        <Text style={styles.description}>
          We collect, Personal Information,Mood tracking data, journal entries,
          task completion status, interaction with community features
        </Text>

        <Text style={styles.title}>2. How We Use Your Information</Text>
        <Text style={styles.description}>
          We use your information to, Personalize your experience and provide
          relevant tasks, Send reminders and motivational messages, Analyze and
          improve our services, Ensure the security of your data
        </Text>

        <Text style={styles.title}>3. Sharing Your Information</Text>
        <Text style={styles.description}>
          We do not sell your personal information. We may share your data with
          third-party service providers who help us operate the app, only to the
          extent necessary to provide our services.
        </Text>

        <Text style={styles.title}>4. Data Security</Text>
        <Text style={styles.description}>
          We implement reasonable measures to protect your data from
          unauthorized access, use, or disclosure.
        </Text>

        <Text style={styles.title}>5. Your Rights</Text>
        <Text style={styles.description}>
          You have the right to access, correct, or delete your personal
          information.
        </Text>

        <Text style={styles.title}>6. Changes to This Policy</Text>
        <Text style={styles.description}>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by updating the "Effective Date" above.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  description: {
    marginBottom: 20,
  },
});

export default PrivacyAndPolicy;
