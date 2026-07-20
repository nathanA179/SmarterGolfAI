import { View, Text, Pressable, Image} from "react-native";
import { router } from "expo-router"
export default function HomePage() {
    return (
        <View>
            <Image source ={require("app/page_img.jpg")} />     
            <Text style = {{ fontSize: 64, fontWeight: "bold" }}> Hello User!</Text>

            <Pressable onPress={() => router.push("../app/ProfilePage")}>
                <Image    
                    source = {require("app/profilebutton-img.png")}
                    style = {{
                    borderRadius: 50,
                    borderWidth: 4,
                    justifyContent: "center",
                    }}
            /></Pressable>
                
            <Pressable onPress={() => router.push("../app/CoachimgPage")}>
                <Image 
                    source = {require("app/coachbutton-img.jpg")}
                    style = {{
                    borderRadius: 50,
                    borderWidth: 4,
                    justifyContent: "center" 
                    }}
            /></Pressable>
            <Text style = {{fontSize: 20 }}> AI Coach </Text>
            
            <Pressable onPress = {() => router.push("../app/PlayPage-Setup")}>
                <Image 
                    source = {require("app/coachbutton-img.jpg")} 
                    style = {{
                    borderRadius: 50,
                    borderWidth: 4,
                    justifyContent: "center"
                }}           
            /></Pressable> 
            <Text style = {{fontSize: 20 }}> Game Analyzer </Text>
          
           
            
            <Pressable onPress = {() => router.push("../app/YardagePage-Setup")}>
                <Image 
                    source = {require("app/yrdgbutton.jpg")}
                    style = {{
                    borderRadius: 50,
                    borderWidth: 4,
                    justifyContent: "center"
               }}
            /></Pressable>
            <Text style = {{fontSize: 20 }}> Learn Your Yardage </Text>

            <Pressable onPress = {() => router.push("../app/AnalyticsPage")}>
                <Image 
                    source = {require("app/anaylticsbutton-img.png")}
                    style = {{
                    borderRadius: 50,
                    borderWidth: 4,
                    justifyContent: "center"
                }}
            /></Pressable>
            <Text style = {{fontSize: 20 }}> Analytics </Text>
        </View>
    )}
