importScripts('https://www.gstatic.com/firebasejs/9.x.x/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.x.x/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyCqg-qBk_iv0sE2l5Pv_ciSPotFG0eZNRQ",
    authDomain: "alert-63f70.firebaseapp.com",
    databaseURL: "https://alert-63f70-default-rtdb.firebaseio.com",
    projectId: "alert-63f70",
    storageBucket: "alert-63f70.appspot.com",
    messagingSenderId: "328076619196",
    appId: "1:328076619196:web:bbc00ccee8121c9bd30fb9",
    measurementId: "G-W2FBCZB43S"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
    console.log('Received background message:', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon || '/images/logo.png',
        badge: '/images/logo.png',
        data: payload.data,
        vibrate: [200, 100, 200],
        tag: payload.data?.id || 'disaster-alert'
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
}); 