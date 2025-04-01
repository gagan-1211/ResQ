importScripts('https://www.gstatic.com/firebasejs/9.x.x/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.x.x/firebase-messaging-compat.js');

const firebaseConfig = {
    
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
