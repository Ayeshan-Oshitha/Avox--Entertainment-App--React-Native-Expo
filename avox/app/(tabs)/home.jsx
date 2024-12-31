import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useUser } from "../../context/UserContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";
import { incrementCounter } from "../../store/CounterStore";

import { images, icons } from "../../constants";
import SearchField from "../../components/SearchField";
import { searchSongs } from "../../lib/api";

const Home = () => {
  const { user } = useUser();
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const fetchSongs = async (query) => {
    setLoading(true);
    setError(null);
    const data = await searchSongs(query);
    setLoading(false);
    if (data.length === 0) {
      setError("No songs found.");
    } else {
      setSongs(data);
    }
  };

  useEffect(() => {
    fetchSongs("Michael Jackson");
  }, []);

  const handleCardClick = () => {
    dispatch(incrementCounter());
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={handleCardClick}>
      <Image
        source={{ uri: item.album.cover_medium }}
        style={styles.albumCover}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.artist}>{item.artist.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
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
          <View>
            <Image
              source={images.logoSmall}
              className="w-9 h-10"
              resizeMode="contain"
            />
          </View>
        </View>
        <SearchField />
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : error ? (
          <Text>{error}</Text>
        ) : (
          <FlatList
            data={songs}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.list}
          />
        )}
      </SafeAreaView>
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>Counter: {counter}</Text>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E1E1E",
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 12,
  },
  welcomeText: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  userName: {
    fontSize: 24,
    color: "#FFFFFF",
  },
  logo: {
    width: 36,
    height: 36,
  },
  list: {
    paddingBottom: 16,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: "#2E2E2E",
    borderRadius: 8,
    marginBottom: 12,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  albumCover: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 4,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  artist: {
    color: "#AAAAAA",
    fontSize: 14,
  },
  counterContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#E5D9F2",
    padding: 10,
    borderRadius: 8,
    elevation: 5,
  },
  counterText: {
    fontSize: 16,
    color: "#69247C",
    fontWeight: "bold",
  },
});
