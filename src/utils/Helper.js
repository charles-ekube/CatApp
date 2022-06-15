import AsyncStorage from "@react-native-async-storage/async-storage";


export const setFaves = async (value) => {
    try {
        await AsyncStorage.setItem("faves", JSON.stringify(value));
    } catch (error) {
        console.log("Could not set faves", error.message);
    }
}
export const getFaves = async () => {
    try {
        let faves = await AsyncStorage.getItem("faves");
        return JSON.parse(faves) || null;
    } catch (error) {
        return error;
    }
}