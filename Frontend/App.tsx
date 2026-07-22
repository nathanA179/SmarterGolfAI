import { StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native';
import { router } from 'expo-router';
export default function App() {
return (
  <ScrollView style = {{flex: 1
   }}>
      <Image source ={require("./assets/images/page_img.jpg")} style = {{width: "100%", height: "100%"
       }} />   
      <Text style = {{ fontSize: 64, fontWeight: "bold" }}> Hello User!</Text>
      <Pressable onPress={() => router.push("./ProfilePage")} style = {{ borderColor: "black"}}>
        <Image    
           source = {require("./assets/images/profilebutton-img.png")}
           style = {{
           borderRadius: 50,
           borderWidth: 4,
           width: 50,
           height: 50,
           justifyContent: "center",  
           }}/>
      </Pressable>
                    
      <Pressable onPress={() => router.push("/CoachingPage")} style = {{ borderColor: "black"}}>
        <Image 
           source = {require("./assets/images/coachbutton-img.jpg")}
           style = {{
           borderRadius: 50,
           borderWidth: 4,
           width: 50,
           height: 50,
           justifyContent: "center" 
           }}/>
      </Pressable>
      <Text style = {{fontSize: 20 }}> AI Coach </Text>
                
      <Pressable onPress = {() => router.push("/PlayPage_Setup")}style = {{ borderColor: "black"}}>
        <Image 
           source = {require("./assets/images/gamebutton-img.jpg")} 
           style = {{
           borderRadius: 50,
           borderWidth: 4,
           width: 50,
           height: 50,
           justifyContent: "center"
           }}/>
      </Pressable> 
      <Text style = {{fontSize: 20 }}> Game Analyzer </Text>       
                
      <Pressable onPress = {() => router.push("/YardagePage_Setup")} style = {{ borderColor: "black"}}>
        <Image 
           source = {require("./assets/images/yrdgbutton.jpg")}
           style = {{
           borderRadius: 50,
           borderWidth: 4,
           width: 50,
           height: 50,
           justifyContent: "center"
        }}/>
      </Pressable>
      <Text style = {{fontSize: 20 }}> Learn Your Yardage </Text>
    
      <Pressable onPress = {() => router.push("/AnalyticsPage")} style = {{ borderColor: "black"}}>
        <Image 
           source = {require("./assets/images/analyticsbutton-img.png")}
           style = {{
           borderRadius: 50,
           borderWidth: 4,
           width: 50,
           height: 50,
           justifyContent: "center"
           }}/>
      </Pressable>
      <Text style = {{fontSize: 20 }}> Analytics </Text>  
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
