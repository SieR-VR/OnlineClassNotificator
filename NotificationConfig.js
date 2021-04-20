import PushNotification from 'react-native-push-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';

PushNotification.configure({
    onRegister: (token) => {
      PushNotification.requestPermissions();
      AsyncStorage.setItem("NoticeToken", token.token);
    },
    onNotification: (notification) => {
      console.log("NOTIFICATION:", notification);
      PushNotification.localNotification({
        channelId: "jinsung-203",
        vibrate: true,
        priority: 'high',
        visibility: 'public',
        importance: 'high',
  
        message: notification.data.body,
        title: notification.data.title,
        playSound: false,
        number: 1,
        actions: '["OK"]',
      })
      console.log("asdf");
    },
    popInitialNotification: true,
});
  
PushNotification.createChannel(
    {
      channelId: "jinsung-203",
      channelName: "jinsung203",
      channelDescription: "FOR TEST",
      playSound: false,
    },
    (created) => console.log(created)
)