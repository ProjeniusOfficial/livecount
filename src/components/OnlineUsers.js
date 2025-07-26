import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { ref, set, onDisconnect, onValue, serverTimestamp } from 'firebase/database';
import "./Onlineusers.css";

const OnlineUsers = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const userId = `user_${Math.random().toString(36).substring(2, 10)}`;
    const userRef = ref(db, `onlineUsers/${userId}`);

    // Set user online
    set(userRef, {
      online: true,
      timestamp: serverTimestamp(),
    });

    // Remove on disconnect
    onDisconnect(userRef).remove();

    // Count online users
    const onlineRef = ref(db, 'onlineUsers');
    const unsubscribe = onValue(onlineRef, (snapshot) => {
      const data = snapshot.val();
      setCount(data ? Object.keys(data).length : 0);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="online-users">
      👁️ {count} people viewing
    </div>
  );
};

export default OnlineUsers;
