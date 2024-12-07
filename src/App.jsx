import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const messages = [
        "Hello, you're amazing today! I miss you, Rishu!",
        "I miss you, my bestie. I’m sorry for being quiet, but I’m thinking of you always. Best of luck in your exams!",
        "Keep shining bright like the star you are, Rishu! But please don't blind me with your brilliance.",
        "The world needs more people like you, Rishu. You're so special to me.",
        "Stay positive and strong, you're doing great, Rishu! I can't wait to see you again.",
        "Today is a new opportunity to be awesome, Rishu! But you've already nailed it every day.",
        "Don't forget to smile today, it suits you well, Rishu! I bet your smile has magical powers.",
        "Rishu, you light up every room you walk into. Did you bring your own spotlight?",
        "I miss you, Rishu! But I bet you’re too busy being awesome to miss me back.",
        "I’m so lucky to know you, Rishu! You’re the human version of a WiFi signal: always reliable and full of energy.",
        "Rishu, I think about you more than I think about food… and that’s saying something!",
        "Rishu, you’re like a walking ray of sunshine… except cooler and with way better fashion sense.",
        "Rishu, I miss everything about you, especially your weirdly amazing sense of humor!",
        "I can't wait to hang out again, Rishu. I’ll bring the snacks, you bring the weird jokes!",
        "Rishu, you're the peanut butter to my jelly. Now, where’s the bread?",
        "Even when we’re apart, I feel like you’re still with me, Rishu. I can hear your voice saying something ridiculous."
    ];

    const getMessageIndex = () => {
        const currentDate = new Date();
        const dayOfYear = currentDate.getDate(); // Get the day of the month
        return dayOfYear % messages.length; // Use modulo to loop through messages
    };

    const [dailyMessage, setDailyMessage] = useState("");

    useEffect(() => {
        const messageIndex = getMessageIndex();
        setDailyMessage(messages[messageIndex]);
    }, []);

    return (
        <div className="App">
            <div className="message-container">
                <h1>Daily Special Message for Rishu</h1>
                <p className="message">{dailyMessage}</p>
                <div className="panda">
                    <img src="https://static.vecteezy.com/system/resources/previews/020/955/957/original/cute-panda-panda-illustration-animal-cute-animal-animal-illustration-png.png" alt="Panda" />
                </div>
            </div>
        </div>
    );
}

export default App;
