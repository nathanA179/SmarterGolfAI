import { View, Text, Button, Pressable, Image} from "react-native";
import { router } from "expo-router"
export default function HomePage() {
    return (
        <View>
            <Image source ={require("Backend/static/page_img.jpg")} />     
            <Text Style = {{ fontSize: 64, fontWeight: "bold" }}> Hello User!</Text>

            <Pressable onPress={() => router.push("Pages/ProfilePage")}>
                <Image    
                    source = {require("Pages/profilebutton-img.png")}
                    Style = {{
                    borderRadius: 50,
                    borderWidth: 4,
                    justifyContent: "center",
                    }}
            /></Pressable>
                
            <Pressable onPress={() => router.push("Pages/CoachimgPage")}>
                <Image 
                    source = {require("Pages/coachbutton-img.jpg")}
                    Style = {{
                    borderRadius: 50,
                    borderWidth: 4,
                    justifyContent: "center" 
                    }}
            /></Pressable>
            <Text Style = {{fontSize: 20 }}> AI Coach </Text>
            
            <Pressable onPress = {() => router.push("Pages/PlayPage-Setup")}>
                <Image 
                    source = {require("Pages/coachbutton-img.jpg")} 
                    Style = {{
                    borderRadius: 50,
                    borderWidth: 4,
                    justifyContent: "center"
                }}           
            /></Pressable> 
            <Text Style = {{fontSize: 20 }}> Game Analyzer </Text>
          
           
            
            <Pressable onPress = {() => router.push("Pages/YardagePage-Setup")}>
                <Image 
                    source = {require("pages/yrdgbutton-img.jpg")}
                    style = {{
                    borderRadius: 50,
                    borderWidth: 4,
                    justifyContent: "center"
               }}
            /></Pressable>
            <Text style = {{fontSize: 20 }}> Learn Your Yardage </Text>

            <Pressable onPress = {() => router.push("Pages/AnalyticsPage")}>
                <Image 
                    source = {require("Pages/anaylticsbutton-img.png")}
                    style = {{
                    borderRadius: 50,
                    borderWidth: 4,
                    justifyContent: "center"
                }}
            /></Pressable>
            <Text style = {{fontSize: 20 }}> Analytics </Text>
        </View>
    )}
