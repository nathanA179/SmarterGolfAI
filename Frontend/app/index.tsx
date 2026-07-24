import { Text, Pressable, Image, View, ScrollView } from 'react-native';
import { router } from 'expo-router';
export default function App() {
return (
  <ScrollView style = {{backgroundColor: "rgb(157, 158, 164)"}} contentContainerStyle={{
    alignItems: "center",
  }}>
   <View style = {{position: "relative", height: 300, width: "100%"}}> 
      <Image source ={require("/assets/images/page_img.jpg")} resizeMode = "cover" style = {{position: "absolute", width: "100%", height: "100%"}}/>  
      <Text style = {{ fontFamily: "Arial" ,fontSize: 48, top: 50, color: "rgb(157, 158, 164)", position: "absolute", textAlign: "center", width: "100%"  }}> Hello User!</Text>
      <Pressable onPress={() => router.push("./ProfilePage")} style = {{ borderColor: "black", top: 20, right: 20, position: "absolute" }}>
        <Image     
           source = {require("../assets/images/profilebutton-img.png")}
           style = {{
           width: 60,
           height: 60,
           }}/>
      </Pressable>
    </View>    

    <View style = {{alignItems: "center", flexDirection: "row", marginVertical: 15}}>            
      <Pressable onPress={() => router.push("/CoachingPage")} style = {{ borderColor: "black"}}>
        <Image 
           source = {require("../assets/images/coachbutton-img.jpg")}
           style = {{
           borderRadius: 50,
           borderWidth: 4,
           width: 100,
           height: 100,
           }}/>
      </Pressable>
      <Text style = {{ fontSize: 35, marginLeft: 20}}> AI Coach </Text>
    </View>

    <View style = {{alignItems: "center", flexDirection: "row", marginVertical: 15}}> 
      <Pressable onPress = {() => router.push("/PlayPage_Setup")}style = {{ borderColor: "black"}}>
        <Image 
           source = {require("../assets/images/gamebutton-img.jpg")} 
           style = {{
           borderRadius: 50,
           borderWidth: 4,
           width: 100,
           height: 100,
           }}/>
      </Pressable> 
      <Text style = {{fontSize: 35, marginLeft: 20}}> Game Analyzer </Text>  
    </View>  

    <View style = {{alignItems: "center", flexDirection: "row", marginVertical: 15}}>            
      <Pressable onPress = {() => router.push("/YardagePage_Setup")} style = {{ borderColor: "black" }}>
        <Image 
           source = {require("../assets/images/yrdgbutton.jpg")}
           style = {{ 
           borderRadius: 50,
           borderWidth: 4,
           width: 100,
           height: 100,
        }}/>
      </Pressable>
      <Text style = {{fontSize: 35, marginLeft: 20}}> Learn Your Yardage </Text>
    </View>

    <View style = {{alignItems: "center", flexDirection: "row", marginVertical: 15}}>
      <Pressable onPress = {() => router.push("/AnalyticsPage")} style = {{ borderColor: "black", }}>
        <Image 
           source = {require("../assets/images/analyticsbutton-img.png")}
           style = {{ 
           borderRadius: 50,
           borderWidth: 4,
           width: 100,
           height: 100,
           }}/>
      </Pressable>
      <Text style = {{fontSize: 35, marginLeft: 20 }}> Analytics </Text>  
    </View>  
  </ScrollView>
  );
}

