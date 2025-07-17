import {Tabs} from "expo-router";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function TabsLayout() {
  return (
   <Tabs screenOptions={{tabBarActiveTintColor: "coral"}}> 
    <Tabs.Screen name="index" 
    options={{
      title: "Home", 
      tabBarIcon: ({color, focused}) => {
        return focused ? (
        <FontAwesome5 name="home" size={24} color={color} />
        ) : (
          <AntDesign name="home" size={24} />
        )
      },
    }}  />
    <Tabs.Screen name="login" 
    options={{
      title: "Login",
      tabBarIcon: ({color}) => (
        <AntDesign name="login" size={24} color={color} />
      )
    }
    } 
    />
   </Tabs>

  );
}
