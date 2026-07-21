import { View, Text, Pressable, Image} from "react-native";
import { router } from "expo-router"
export default function HomePage() {
    return (
        <View>
            <Image source ={require("../../assets/images/page_img.jpg")} />     
            <Text style = {{ fontSize: 64, fontWeight: "bold" }}> Hello User!</Text>

            <Pressable onPress={() => router.push("../src/app/ProfilePage")}>
                <Image    
                    source = {require("../../assets/images/profilebutton-img.png")}
                    style = {{
                    borderRadius: 50,
                    borderWidth: 4,
                    justifyContent: "center",
                    }}
            /></Pressable>
                
            <Pressable onPress={() => router.push("../src/app/CoachimgPage")}>
                <Image 
                    source = {require("../../assets/images/coachbutton-img.jpg")}
                    style = {{
                    borderRadius: 50,
                    borderWidth: 4,
                    justifyContent: "center" 
                    }}
            /></Pressable>
            <Text style = {{fontSize: 20 }}> AI Coach </Text>
            
            <Pressable onPress = {() => router.push("../src/app/PlayPage-Setup")}>
                <Image 
                    source = {require("../../assets/images/coachbutton-img.jpg")} 
                    style = {{
                    borderRadius: 50,
                    borderWidth: 4,
                    justifyContent: "center"
                }}           
            /></Pressable> 
            <Text style = {{fontSize: 20 }}> Game Analyzer </Text>
          
           
            
            <Pressable onPress = {() => router.push("../src/app/YardagePage-Setup")}>
                <Image 
                    source = {require("../../assets/images/yrdgbutton.jpg")}
                    style = {{
                    borderRadius: 50,
                    borderWidth: 4,
                    justifyContent: "center"
               }}
            /></Pressable>
            <Text style = {{fontSize: 20 }}> Learn Your Yardage </Text>

            <Pressable onPress = {() => router.push("../src/app/AnalyticsPage")}>
                <Image 
                    source = {require("../../assets/images/anaylticsbutton-img.png")}
                    style = {{
                    borderRadius: 50,
                    borderWidth: 4,
                    justifyContent: "center"
                }}
            /></Pressable>
            <Text style = {{fontSize: 20 }}> Analytics </Text>
        </View>
    )}
