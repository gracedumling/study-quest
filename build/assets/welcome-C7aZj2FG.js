import{q as l,j as e,a as n,J as s}from"./app-CDyc61az.js";function o(){const{auth:r}=l().props,i="/official_logo.png",a="/img/banner 2.webp",t="/img/banner 3.webp";return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"Rogue-Lite Philippine History Trivia Game",children:e.jsx("style",{children:`
                    :root {
                        --primary-color: #7e20dc;
                        --secondary-color: #9d4edd;
                        --background-dark: #1a0b2e;
                        --background-darker: #13091f;
                        --text-light: #ffffff;
                        --text-dim: #b8c1ec;
                    }
                    
                    body {
                        font-family: 'Poppins', sans-serif;
                        background-color: var(--background-dark);
                        color: var(--text-light);
                    }
                    
                    .glow-text {
                        text-shadow: 0 0 10px rgba(126, 32, 220, 0.7), 0 0 20px rgba(126, 32, 220, 0.5);
                    }
                    
                    .floating {
                        animation: float 4s ease-in-out infinite;
                    }
                    
                    @keyframes float {
                        0% { transform: translateY(0px); }
                        50% { transform: translateY(-15px); }
                        100% { transform: translateY(0px); }
                    }
                    
                    /* Custom scroll bar */
                    ::-webkit-scrollbar {
                        width: 10px;
                    }
                    
                    ::-webkit-scrollbar-track {
                        background: var(--background-darker);
                    }
                    
                    ::-webkit-scrollbar-thumb {
                        background: var(--primary-color);
                        border-radius: 5px;
                    }
                    
                    ::-webkit-scrollbar-thumb:hover {
                        background: var(--secondary-color);
                    }
                    
                    /* Button glow effect */
                    .btn-glow {
                        box-shadow: 0 0 15px rgba(126, 32, 220, 0.5);
                        transition: all 0.3s ease;
                    }
                    
                    .btn-glow:hover {
                        box-shadow: 0 0 20px rgba(126, 32, 220, 0.8);
                        transform: translateY(-2px);
                    }
                    
                    /* Card hover effects */
                    .feature-card {
                        transition: all 0.3s ease;
                        border: 1px solid rgba(126, 32, 220, 0.3);
                    }
                    
                    .feature-card:hover {
                        transform: translateY(-10px);
                        box-shadow: 0 10px 25px rgba(126, 32, 220, 0.5);
                        border: 1px solid rgba(126, 32, 220, 0.6);
                    }
                `})}),e.jsxs("div",{className:"min-h-screen bg-[#1a0b2e] text-white",children:[e.jsx("header",{className:"fixed w-full bg-[#13091f] bg-opacity-90 z-50 shadow-lg",children:e.jsx("div",{className:"container mx-auto px-4 py-3",children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("img",{src:i,alt:"GameVerse Logo",className:"h-14 w-auto sm:h-10 md:h-12 object-contain mr-2 transition-all duration-300"}),e.jsxs("nav",{className:"hidden md:flex space-x-8",children:[e.jsx("a",{href:"#home",className:"text-white hover:text-purple-300 transition",children:"Home"}),e.jsx("a",{href:"#features",className:"text-white hover:text-purple-300 transition",children:"Features"}),e.jsx("a",{href:"#community",className:"text-white hover:text-purple-300 transition",children:"Community"})]}),e.jsx("div",{className:"flex space-x-4",children:r.user?e.jsx(s,{href:route("dashboard"),className:"px-4 py-2 rounded-lg bg-transparent border border-[#7e20dc] text-white hover:bg-[#7e20dc] transition",children:"Dashboard"}):e.jsxs(e.Fragment,{children:[e.jsx(s,{href:route("login"),className:"px-4 py-2 rounded-lg bg-transparent border border-[#7e20dc] text-white hover:bg-[#7e20dc] transition",children:"Log in"}),e.jsx(s,{href:route("register"),className:"px-4 py-2 rounded-lg bg-[#7e20dc] text-white hover:bg-purple-700 transition btn-glow",children:"Register"})]})}),e.jsx("div",{className:"md:hidden",children:e.jsx("button",{className:"text-white",children:e.jsx("i",{className:"fas fa-bars"})})})]})})}),e.jsxs("main",{children:[e.jsx("section",{className:"pt-24 min-h-screen flex items-center",id:"home",children:e.jsx("div",{className:"container mx-auto px-4",children:e.jsxs("div",{className:"flex flex-col md:flex-row items-center",children:[e.jsxs("div",{className:"md:w-1/2 mb-8 md:mb-0",children:[e.jsx("h1",{className:"text-4xl md:text-5xl lg:text-6xl font-bold mb-4 glow-text",children:"Rogue-Lite Philippine History Trivia Game"}),e.jsx("p",{className:"text-xl text-gray-300 mb-6",children:"Rogue-Lite Philippine History Trivia Game"})]}),e.jsx("div",{className:"md:w-1/2",children:e.jsx("div",{className:"text-center",children:e.jsx("img",{src:a,alt:a,className:"mx-auto floating rounded-xl shadow-2xl",style:{boxShadow:"0 0 30px rgba(126, 32, 220, 0.5)"}})})})]})})}),e.jsx("section",{className:"py-16 bg-[#13091f]",id:"features",children:e.jsxs("div",{className:"container mx-auto px-4",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-3 glow-text",children:"Featured Games"}),e.jsx("p",{className:"text-xl text-gray-300 max-w-2xl mx-auto",children:"Experience gaming like never before with our state-of-the-art platform"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:[e.jsxs("div",{className:"feature-card bg-[#1a0b2e] rounded-xl p-6 hover:shadow-lg",children:[e.jsx("div",{className:"text-[#7e20dc] text-3xl mb-4",children:e.jsx("i",{className:"fas fa-user-plus"})}),e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Account Creation"}),e.jsx("p",{className:"text-gray-300",children:"Create your gaming profile directly or sign in with your Google account for a seamless experience."})]}),e.jsxs("div",{className:"feature-card bg-[#1a0b2e] rounded-xl p-6 hover:shadow-lg",children:[e.jsx("div",{className:"text-[#7e20dc] text-3xl mb-4",children:e.jsx("i",{className:"fas fa-trophy"})}),e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Leaderboards"}),e.jsx("p",{className:"text-gray-300",children:"Compete with players worldwide and see your name climb the rankings on our dynamic leaderboards."})]}),e.jsxs("div",{className:"feature-card bg-[#1a0b2e] rounded-xl p-6 hover:shadow-lg",children:[e.jsx("div",{className:"text-[#7e20dc] text-3xl mb-4",children:e.jsx("i",{className:"fas fa-robot"})}),e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"AI Assistant"}),e.jsx("p",{className:"text-gray-300",children:"Meet your in-game companion that offers trivia, guides you through tutorials, and provides helpful clues."})]}),e.jsxs("div",{className:"feature-card bg-[#1a0b2e] rounded-xl p-6 hover:shadow-lg",children:[e.jsx("div",{className:"text-[#7e20dc] text-3xl mb-4",children:e.jsx("i",{className:"fas fa-lightbulb"})}),e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Interactive Trivia"}),e.jsx("p",{className:"text-gray-300",children:"Learn fascinating historical facts while playing with our AI-powered trivia prompts throughout your game."})]}),e.jsxs("div",{className:"feature-card bg-[#1a0b2e] rounded-xl p-6 hover:shadow-lg",children:[e.jsx("div",{className:"text-[#7e20dc] text-3xl mb-4",children:e.jsx("i",{className:"fas fa-smile"})}),e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Expressive Mascot"}),e.jsx("p",{className:"text-gray-300",children:"Our AI assistant mascot displays a range of emotions to enhance your gaming experience with personality."})]}),e.jsxs("div",{className:"feature-card bg-[#1a0b2e] rounded-xl p-6 hover:shadow-lg",children:[e.jsx("div",{className:"text-[#7e20dc] text-3xl mb-4",children:e.jsx("i",{className:"fas fa-toggle-on"})}),e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Customizable Experience"}),e.jsx("p",{className:"text-gray-300",children:"Toggle the AI assistant on or off based on your preferences for a personalized gaming experience."})]})]})]})}),e.jsx("section",{className:"py-16",id:"community",children:e.jsxs("div",{className:"container mx-auto px-4",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-3 glow-text",children:"Join Our Community"}),e.jsx("p",{className:"text-xl text-gray-300 max-w-2xl mx-auto",children:"Connect with players and enhance your gaming experience"})]}),e.jsxs("div",{className:"flex flex-col md:flex-row items-center",children:[e.jsx("div",{className:"md:w-1/2 mb-8 md:mb-0",children:e.jsx("img",{src:t,alt:t,className:"rounded-xl shadow-2xl",style:{boxShadow:"0 0 30px rgba(126, 32, 220, 0.3)"}})}),e.jsxs("div",{className:"md:w-1/2 md:pl-12",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-6 text-[#9d4edd]",children:"Community Features"}),e.jsxs("div",{className:"flex mb-6",children:[e.jsx("div",{className:"mr-4 text-[#7e20dc] text-2xl",children:e.jsx("i",{className:"fas fa-users"})}),e.jsxs("div",{children:[e.jsx("h5",{className:"text-lg font-semibold mb-1",children:"Player Connections"}),e.jsx("p",{className:"text-gray-300",children:"Compare scores with friends and invite them to join your gaming sessions."})]})]}),e.jsxs("div",{className:"flex mb-6",children:[e.jsx("div",{className:"mr-4 text-[#7e20dc] text-2xl",children:e.jsx("i",{className:"fas fa-ranking-star"})}),e.jsxs("div",{children:[e.jsx("h5",{className:"text-lg font-semibold mb-1",children:"Global Rankings"}),e.jsx("p",{className:"text-gray-300",children:"Track your progress against players worldwide with real-time leaderboard updates."})]})]}),e.jsxs("div",{className:"flex mb-6",children:[e.jsx("div",{className:"mr-4 text-[#7e20dc] text-2xl",children:e.jsx("i",{className:"fas fa-share-alt"})}),e.jsxs("div",{children:[e.jsx("h5",{className:"text-lg font-semibold mb-1",children:"Share Your Achievements"}),e.jsx("p",{className:"text-gray-300",children:"Show off your gaming milestones on social media with one-click sharing."})]})]}),e.jsx("button",{className:"px-6 py-3 rounded-lg bg-[#7e20dc] text-white hover:bg-purple-700 transition btn-glow",children:"Join Now"})]})]})]})})]}),e.jsx("footer",{className:"bg-[#13091f] py-12",children:e.jsxs("div",{className:"container mx-auto px-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-2xl font-bold mb-4",children:"GameVerse"}),e.jsx("p",{className:"text-gray-300 mb-4",children:"An intelligent gaming platform with personalized AI assistance. Create an account, compete on leaderboards, and enjoy an enhanced gaming experience."}),e.jsxs("div",{className:"flex space-x-4",children:[e.jsx("a",{href:"#",className:"text-white hover:text-[#7e20dc] transition",children:e.jsx("i",{className:"fab fa-facebook-f"})}),e.jsx("a",{href:"#",className:"text-white hover:text-[#7e20dc] transition",children:e.jsx("i",{className:"fab fa-twitter"})}),e.jsx("a",{href:"#",className:"text-white hover:text-[#7e20dc] transition",children:e.jsx("i",{className:"fab fa-instagram"})})]})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"text-lg font-semibold mb-4",children:"Quick Links"}),e.jsxs("div",{className:"flex flex-col space-y-2",children:[e.jsx("a",{href:"#home",className:"text-gray-300 hover:text-white transition",children:"Home"}),e.jsx("a",{href:"#features",className:"text-gray-300 hover:text-white transition",children:"Features"}),e.jsx("a",{href:"#community",className:"text-gray-300 hover:text-white transition",children:"Community"}),e.jsx(s,{href:route("login"),className:"text-gray-300 hover:text-white transition",children:"Login"}),e.jsx(s,{href:route("register"),className:"text-gray-300 hover:text-white transition",children:"Sign Up"})]})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"text-lg font-semibold mb-4",children:"Support"}),e.jsxs("div",{className:"flex flex-col space-y-2",children:[e.jsx("a",{href:"#",className:"text-gray-300 hover:text-white transition",children:"Help Center"}),e.jsx("a",{href:"#",className:"text-gray-300 hover:text-white transition",children:"FAQ"}),e.jsx("a",{href:"#",className:"text-gray-300 hover:text-white transition",children:"Contact Us"}),e.jsx("a",{href:"#",className:"text-gray-300 hover:text-white transition",children:"Terms of Service"}),e.jsx("a",{href:"#",className:"text-gray-300 hover:text-white transition",children:"Privacy Policy"})]})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"text-lg font-semibold mb-4",children:"Connect"}),e.jsxs("div",{className:"flex flex-col space-y-2",children:[e.jsx("a",{href:"#",className:"text-gray-300 hover:text-white transition",children:"Leaderboards"}),e.jsx("a",{href:"#",className:"text-gray-300 hover:text-white transition",children:"AI Assistant"}),e.jsx("a",{href:"#",className:"text-gray-300 hover:text-white transition",children:"Share Scores"})]})]})]}),e.jsx("div",{className:"border-t border-gray-800 mt-8 pt-8 text-center",children:e.jsx("p",{className:"text-gray-400",children:"© 2025 GameVerse. All rights reserved."})})]})})]})]})}export{o as default};
