// ProfileScreen.js
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import styles from "./profileStyles";
import TextCard from "./TextCard";
import BioEditPopUp from "./BioEditPopUp";
import React, { useEffect, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAUser, updateAUser } from "../../services/userServices/userService";
import { imageDb } from "../../config/firebase";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  deleteObject,
} from "firebase/storage";
import { v4 } from "uuid";
import FilePicker from "../../components/GetImages/FilePicker";
import ProfilePopup from "./ProfileImageUpdatePopUp";
import {
  getADoctor,
  updateADoctor,
} from "../../services/doctorServices/doctorService";
import SchedulePopUp from "./ScheduleUpdatePopUp";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();

  const [isPopupVisibleName, setPopupVisibleName] = useState(false);
  const [isPopupVisibleUserName, setPopupVisibleUserName] = useState(false);
  const [isPopupVisibleEmail, setPopupVisibleEmail] = useState(false);
  const [isPopupVisibleContact, setPopupVisibleContact] = useState(false);
  const [isPopupVisibleAddress, setPopupVisibleAddress] = useState(false);
  const [isPopupVisibleCity, setPopupVisibleCity] = useState(false);
  const [isPopupVisibleCountry, setPopupVisibleCountry] = useState(false);
  const [isPopupVisibleProPic, setPopupVisibleProPic] = useState(false);
  const [isPopupVisibleBio, setPopupVisibleBio] = useState(false);
  const [isPopupVisibleSpecialization, setPopupVisibleSpecialization] =
    useState(false);
  const [isPopupVisibleQualification, setPopupVisibleQualification] =
    useState(false);
  const [isPopupVisibleSchedule, setPopupVisibleSchedule] = useState(false);
  const [accountType, setAccountType] = useState(false);
  const [userId, setUserId] = useState(false);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const role = await AsyncStorage.getItem("role");
        setUserRole(role);

        let userData;
        if (role === "regularUser") {
          userData = await getAUser();
        } else if (role === "doctor") {
          userData = await getADoctor();
        } else {
          throw new Error("Invalid user role");
        }

        setUser(userData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       if(userRole === 'regularUser'){
  //       const userData = await getAUser();
  //       setUser(userData);
  //       }
  //       if(userRole === 'doctor'){
  //         const userData = await getADoctor();
  //         setUser(userData);
  //       }

  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchUser();
  // }, []);

  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [profilePicture, setprofilePicture] = useState("");
  const [previousProPic, setPreviousProPic] = useState(proPic);
  const [bio, setBio] = useState("");
  const [specialization, setSspecialization] = useState("");
  const [qualification, setQualification] = useState("");
  const [monday, setMonday] = useState([]);
  const [tuesday, setTeusday] = useState([]);
  const [wednesday, setWednesday] = useState([]);
  const [thursday, setThursday] = useState([]);
  const [friday, setFriday] = useState([]);
  const [saturday, setSaturday] = useState([]);
  const [sunday, setSunday] = useState([]);
  const [availableDays, setavailableDays] = useState([]);

  useEffect(() => {
    if (user != null) {
      setFullName(user.fullName);
      setUserName(user.userName);
      setEmail(user.email);
      setContactNumber(user.contactNumber);
      setAddress(user.address);
      setCity(user.city);
      setCountry(user.country);
      setprofilePicture(user.proPic);
      setPreviousProPic(user.proPic);
      setUserId(user._id);

      if (userRole === "regularUser") {
        setAccountType("Regular User");
      }

      if (userRole === "doctor") {
        setBio(user.bio);
        setSspecialization(user.specialization);
        setQualification(user.qualification);
        setavailableDays(user.availableDays);
        setMonday(user.monday);
        setTeusday(user.tuesday);
        setWednesday(user.wednessday);
        setThursday(user.thursday);
        setFriday(user.friday);
        setSaturday(user.saturday);
        setSunday(user.sunday);
        setAccountType("Professional");
      }
    }
  }, [user]);
  const handlebackBtn = () => {
    navigation.navigate("HomeScreen");
  };

  const handleUpdateFullName = async (newFullName) => {
    try {
      let updatedUser;

      if (userRole === "regularUser") {
        updatedUser = await updateAUser({ fullName: newFullName });
      } else if (userRole === "doctor") {
        updatedUser = await updateADoctor({ fullName: newFullName });
      } else {
        throw new Error("Invalid user role");
      }

      // Handle success, maybe update local state with the updated user data
      console.log("Name updated successfully:");
    } catch (error) {
      // Handle error
      console.error("Failed to update name:", error.message);
    }
  };

  const handleUpdateUserName = async (newuserName) => {
    try {
      let updatedUser;

      if (userRole === "regularUser") {
        updatedUser = await updateAUser({ userName: newuserName });
      } else if (userRole === "doctor") {
        updatedUser = await updateADoctor({ userName: newuserName });
      } else {
        throw new Error("Invalid user role");
      }
      console.log("username updated successfully:");
    } catch (error) {
      // Handle error
      console.error("Failed to update name:", error.message);
    }
  };

  const handleUpdateEmail = async (newEmail) => {
    try {
      let updatedUser;

      const Email = newEmail.toLowerCase();

      if (userRole === "regularUser") {
        updatedUser = await updateAUser({ email: Email });
      } else if (userRole === "doctor") {
        updatedUser = await updateADoctor({ email: Email });
      } else {
        throw new Error("Invalid user role");
      }
      console.log("email updated successfully:");
    } catch (error) {
      // Handle error
      console.error("Failed to update Email:", error.message);
    }
  };

  const handleUpdateContactNumber = async (newNumber) => {
    try {
      let updatedUser;

      if (userRole === "regularUser") {
        updatedUser = await updateAUser({ contactNumber: newNumber });
      } else if (userRole === "doctor") {
        updatedUser = await updateADoctor({ contactNumber: newNumber });
      } else {
        throw new Error("Invalid user role");
      }
      console.log("Contact number updated successfully:");
    } catch (error) {
      // Handle error
      console.error("Failed to update name:", error.message);
    }
  };

  const handleUpdateAddress = async (newAddress) => {
    try {
      let updatedUser;

      if (userRole === "regularUser") {
        updatedUser = await updateAUser({ address: newAddress });
      } else if (userRole === "doctor") {
        updatedUser = await updateADoctor({ address: newAddress });
      } else {
        throw new Error("Invalid user role");
      }
      console.log("address updated successfully:");
    } catch (error) {
      // Handle error
      console.error("Failed to update name:", error.message);
    }
  };

  const handleUpdateCity = async (newCity) => {
    try {
      let updatedUser;

      if (userRole === "regularUser") {
        updatedUser = await updateAUser({ city: newCity });
      } else if (userRole === "doctor") {
        updatedUser = await updateADoctor({ city: newCity });
      } else {
        throw new Error("Invalid user role");
      }
    } catch (error) {
      // Handle error
      console.error("Failed to update name:", error.message);
    }
  };

  const handleUpdateCountry = async (newCountry) => {
    try {
      let updatedUser;

      if (userRole === "regularUser") {
        updatedUser = await updateAUser({ country: newCountry });
      } else if (userRole === "doctor") {
        updatedUser = await updateADoctor({ country: newCountry });
      } else {
        throw new Error("Invalid user role");
      }

      console.log("Country updated successfully:");
    } catch (error) {
      // Handle error
      console.error("Failed to update name:", error.message);
    }
  };

  const handleUpdatePropic = async (newProPic) => {
    try {
      let updatedUser;

      if (userRole === "regularUser") {
        updatedUser = await updateAUser({ proPic: newProPic });
      } else if (userRole === "doctor") {
        updatedUser = await updateADoctor({ proPic: newProPic });
      } else {
        throw new Error("Invalid user role");
      }
      console.log("Profile Picture updated successfully:");
    } catch (error) {
      // Handle error
      console.error("Failed to update name:", error.message);
    }
  };

  const handleUpdateBio = async (newBio) => {
    try {
      const updatedUser = await updateADoctor({ bio: newBio });
      // Handle success, maybe update local state with the updated user data
      console.log("Profile Bio updated successfully:");
    } catch (error) {
      // Handle error
      console.error("Failed to update name:", error.message);
    }
  };

  const handleUpdateSpecialization = async (newSpecialization) => {
    try {
      const updatedUser = await updateADoctor({
        specialization: newSpecialization,
      });
      // Handle success, maybe update local state with the updated user data
      console.log("Profile Bio updated successfully:");
    } catch (error) {
      // Handle error
      console.error("Failed to update name:", error.message);
    }
  };

  const handleUpdateQualification = async (newQalification) => {
    try {
      const updatedUser = await updateADoctor({
        qualification: newQalification,
      });
      // Handle success, maybe update local state with the updated user data
      console.log("Qalification updated successfully:");
    } catch (error) {
      // Handle error
      console.error("Failed to update name:", error.message);
    }
  };

  const handleUpdateSchedule = async (
    newAvailableDays,
    newMonday,
    newTuesday,
    newWednesday,
    newThursday,
    newFriday,
    newSaturday,
    newSunday
  ) => {
    try {
      const updatedUser = await updateADoctor({
        availableDays: newAvailableDays,
        monday: newMonday,
        tuesday: newTuesday,
        wednessday: newWednesday,
        thursday: newThursday,
        friday: newFriday,
        saturday: newSaturday,
        sunday: newSunday,
      });

      console.log("Qalification updated successfully:");

      togglePopupSchedule();
    } catch (error) {
      // Handle error
      console.error("Failed to update name:", error.message);
    }
  };

  const togglePopupName = () => {
    setPopupVisibleName(!isPopupVisibleName);
  };

  const togglePopupUserName = () => {
    setPopupVisibleUserName(!isPopupVisibleUserName);
  };

  const togglePopupEmail = () => {
    setPopupVisibleEmail(!isPopupVisibleEmail);
  };

  const togglePopupContact = () => {
    setPopupVisibleContact(!isPopupVisibleContact);
  };

  const togglePopupAddress = () => {
    setPopupVisibleAddress(!isPopupVisibleAddress);
  };

  const togglePopupCity = () => {
    setPopupVisibleCity(!isPopupVisibleCity);
  };

  const togglePopupCountry = () => {
    setPopupVisibleCountry(!isPopupVisibleCountry);
  };

  const togglePopupBio = () => {
    setPopupVisibleBio(!isPopupVisibleBio);
  };

  const togglePopupSpecialization = () => {
    setPopupVisibleSpecialization(!isPopupVisibleSpecialization);
  };

  const togglePopupQualification = () => {
    setPopupVisibleQualification(!isPopupVisibleQualification);
  };

  setPopupVisibleSchedule;

  const togglePopupSchedule = () => {
    setPopupVisibleSchedule(!isPopupVisibleSchedule);
  };

  const togglePopupProPic = () => {
    setPopupVisibleProPic(!isPopupVisibleProPic);
  };

  const [proPic, setProPic] = useState(null);
  const [proPicUrl, setProPicUrl] = useState("");
  const [loader, setLoader] = useState(false);

  const firebaseUpload = async () => {
    try {
      if (proPic) {
        const proPicRef = ref(imageDb, `user/profile/${v4()}`);
        const proPicData = await fetch(proPic.uri);
        const proPicBlob = await proPicData.blob();
        await uploadBytes(proPicRef, proPicBlob);
        const newProPicUrl = await getDownloadURL(proPicRef);
        setProPicUrl(newProPicUrl);
        return newProPicUrl;
      } else {
        console.error("Profile picture is not selected");
        return null;
      }
    } catch (error) {
      console.error("Error uploading profile picture:", error);
      return null;
    }
  };

  const handleProPicUpload = async () => {
    console.log("uploading");
    const imageUrl = await firebaseUpload();
    if (imageUrl) {
      console.log("Profile picture uploaded successfully:", imageUrl);
      deleteImage(previousProPic);
      handleUpdatePropic(imageUrl);
      setprofilePicture(imageUrl);
      togglePopupProPic();
    } else {
      console.error("Failed to get profile picture URL");
    }
  };

  const deleteImage = async (previousImageUrl) => {
    try {
      const imageRef = ref(imageDb, previousImageUrl);
      await deleteObject(imageRef);
      console.log("Image deleted successfully");
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  return (
    <View>
      <View>
        <TouchableOpacity onPress={handlebackBtn}>
          <Image
            source={require("../../assets/images/backProfile.png")}
            style={{ marginTop: 50, marginLeft: 25, width: 50, height: 50 }}
          />
        </TouchableOpacity>
      </View>

      <Text style={{ alignSelf: "center", marginTop: 15, fontSize: 20 }}>
        Profile
      </Text>

      <View style={styles.imageEdit}>
        <View style={styles.imageEditLeft}>
          <View
            style={{
              width: 130,
              height: 130,
              borderRadius: 65,
              overflow: "hidden",
            }}
          >
            {profilePicture && (
              <ImageBackground
                source={{ uri: profilePicture }}
                style={{ width: 130, height: 130, borderRadius: 60 }}
              >
                <View style={{ height: "100%" }}>
                  <TouchableOpacity onPress={togglePopupProPic}>
                    <Image
                      source={require("../../assets/images/ProfileIcons/imageEdit.png")}
                      style={{ width: 130, height: 130 }}
                    ></Image>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            )}
          </View>
        </View>

        <View style={styles.imageEditRight}>
          <Text style={{ fontSize: 18, marginBottom: 5 }}>{userName}</Text>
          <Text style={{ fontSize: 12, color: "#868686" }}>
            User ID : {userId}
          </Text>
          <Text style={{ fontSize: 12, color: "#868686" }}>
            Account Type : {accountType}
          </Text>
        </View>
      </View>

      <View style={styles.editInfo}>
        <Text style={{ fontSize: 18, marginBottom: 22 }}>Your Info</Text>
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 780 }}>
          {user && (
            <>
              <TextCard
                title="Name"
                subText={fullName}
                icon={require("../../assets/images/ProfileIcons/name.png")}
                function={togglePopupName}
              />

              <TextCard
                title="User Name"
                subText={userName}
                icon={require("../../assets/images/ProfileIcons/userName.png")}
                function={togglePopupUserName}
              />

              <TextCard
                title="Email"
                subText={email}
                icon={require("../../assets/images/ProfileIcons/email.png")}
                function={togglePopupEmail}
              />

              <TextCard
                title="Contact Number"
                subText={contactNumber}
                icon={require("../../assets/images/ProfileIcons/contact.png")}
                function={togglePopupContact}
              />

              <TextCard
                title="Address"
                subText={address}
                icon={require("../../assets/images/ProfileIcons/address.png")}
                function={togglePopupAddress}
              />

              <TextCard
                title="City"
                subText={city}
                icon={require("../../assets/images/ProfileIcons/city.png")}
                function={togglePopupCity}
              />

              <TextCard
                title="Country"
                subText={country}
                icon={require("../../assets/images/ProfileIcons/country.png")}
                function={togglePopupCountry}
              />

              {userRole === "doctor" && (
                <>
                  <TextCard
                    title="Bio"
                    subText={bio}
                    icon={require("../../assets/images/ProfileIcons/bio.png")}
                    function={togglePopupBio}
                  />

                  <TextCard
                    title="specialization"
                    subText={specialization}
                    icon={require("../../assets/images/ProfileIcons/specialization.png")}
                    function={togglePopupSpecialization}
                  />

                  <TextCard
                    title="Qualification"
                    subText={qualification}
                    icon={require("../../assets/images/ProfileIcons/qualification.png")}
                    function={togglePopupQualification}
                  />

                  <TextCard
                    title="Available Time"
                    subText="click edit to view schedule"
                    icon={require("../../assets/images/ProfileIcons/time.png")}
                    function={togglePopupSchedule}
                  />
                </>
              )}
            </>
          )}
        </ScrollView>
      </View>

      <BioEditPopUp
        isVisible={isPopupVisibleName}
        onClose={togglePopupName}
        title="Edit Name"
        previousText={fullName}
        update={setFullName}
        updateFunction={handleUpdateFullName}
      />
      <BioEditPopUp
        isVisible={isPopupVisibleUserName}
        onClose={togglePopupUserName}
        title="Edit User Name"
        previousText={userName}
        update={setUserName}
        updateFunction={handleUpdateUserName}
      />
      <BioEditPopUp
        isVisible={isPopupVisibleEmail}
        onClose={togglePopupEmail}
        title="Edit Email"
        previousText={email}
        update={setEmail}
        updateFunction={handleUpdateEmail}
      />
      <BioEditPopUp
        isVisible={isPopupVisibleContact}
        onClose={togglePopupContact}
        title="Edit Contact Number"
        previousText={contactNumber}
        update={setContactNumber}
        updateFunction={handleUpdateContactNumber}
      />
      <BioEditPopUp
        isVisible={isPopupVisibleAddress}
        onClose={togglePopupAddress}
        title="Edit Address"
        previousText={address}
        update={setAddress}
        updateFunction={handleUpdateAddress}
      />
      <BioEditPopUp
        isVisible={isPopupVisibleCity}
        onClose={togglePopupCity}
        title="Edit City"
        previousText={city}
        update={setCity}
        updateFunction={handleUpdateCity}
      />
      <BioEditPopUp
        isVisible={isPopupVisibleCountry}
        onClose={togglePopupCountry}
        title="Edit Country"
        previousText={country}
        update={setCountry}
        updateFunction={handleUpdateCountry}
      />
      <ProfilePopup
        isVisible={isPopupVisibleProPic}
        onClose={togglePopupProPic}
        setProPic={setProPic}
        updateFunction={handleProPicUpload}
      />
      <BioEditPopUp
        isVisible={isPopupVisibleBio}
        onClose={togglePopupBio}
        title="Edit Bio"
        previousText={bio}
        update={setBio}
        updateFunction={handleUpdateBio}
      />
      <BioEditPopUp
        isVisible={isPopupVisibleSpecialization}
        onClose={togglePopupSpecialization}
        title="Edit Specialization"
        previousText={specialization}
        update={setSspecialization}
        updateFunction={handleUpdateSpecialization}
      />
      <BioEditPopUp
        isVisible={isPopupVisibleQualification}
        onClose={togglePopupQualification}
        title="Edit Qualification"
        previousText={qualification}
        update={setQualification}
        updateFunction={handleUpdateQualification}
      />
      <SchedulePopUp
        isVisible={isPopupVisibleSchedule}
        onClose={togglePopupSchedule}
        previousText={qualification}
        update={setQualification}
        updateFunction={handleUpdateSchedule}
        setMonday={setMonday}
        setTeusday={setTeusday}
        setWednesday={setWednesday}
        setThursday={setThursday}
        setFriday={setFriday}
        setSaturday={setSaturday}
        setSunday={setSunday}
        monday={monday}
        tuesday={tuesday}
        wednesday={wednesday}
        thursday={thursday}
        friday={friday}
        saturday={saturday}
        sunday={sunday}
        setavailableDays={setavailableDays}
        availableDays={availableDays}
      />
    </View>
  );
};

export default ProfileScreen;
