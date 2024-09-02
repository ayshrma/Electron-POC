
// import './App.css';

  // import FullScreenComponent from "./FullScreenComponent"
import Screenchange from './Screenchange'
export default function App() {
  return (
    <div>

  {/* <FullScreenComponent /> */}
          <Screenchange/>
            </div>
  )
}






















// import { useState } from "react"

// export default function Home() {
//   const [isFullscreen, setFullscreen] = useState(false)

//   const makeFullscreen = () => {
//     setFullscreen(true)
//     document.documentElement.requestFullscreen()
//   }

//   const closeFullscreen = () => {
//     setFullscreen(false)
//     document.exitFullscreen()
//   }

//   console.log(isFullscreen)
//   return (
//     <div
//       className={`flex flex-col items-center justify-center w-full h-screen ${
//         isFullscreen ? "bg-black" : ""
//       }`}
//     >
//       <div
//         className={`w-5/6 space-y-6 text-center wrapper ${
//           isFullscreen ? "hidden" : "visible"
//         }`}
//       >
//         <button
//           onClick={makeFullscreen}
//           className={`btn btn-primary ${!isFullscreen ? "visible" : "hidden"}`}
//         >
//           FUll Screen
//         </button>
//       </div>
//       <button
//         onClick={closeFullscreen}
//         className={`btn btn-accent ${isFullscreen ? "visible" : "hidden"}`}
//       >
//         Small screen
//       </button>
//     </div>
//   )
// }



// import React, { useEffect } from 'react';

// const App = () => {
//   useEffect(() => {
//     const handleVisibilityChange = () => {
//       if (document.hidden) {
//         console.log('Document is hidden');
//         // Handle the app being minimized or switched away
//       } else {
//         console.log('Document is visible');
//         alert("Don't Change the screen")
//         // Handle the app being restored or switched back
//       }
//     };

//     const handleFocus = () => {
//       console.log('Window has gained focus');
//       // Handle the window gaining focus
//     };

//     const handleBlur = () => {
//       console.log('Window has lost focus');
//       // Handle the window losing focus
//     };

//     document.addEventListener('visibilitychange', handleVisibilityChange);
//     window.addEventListener('focus', handleFocus);
//     window.addEventListener('blur', handleBlur);

//     return () => {
//       document.removeEventListener('visibilitychange', handleVisibilityChange);
//       window.removeEventListener('focus', handleFocus);
//       window.removeEventListener('blur', handleBlur);
//     };
//   }, []);

//   return <div>Your app content here</div>;
// };

// export default App;


// import { useState, useCallback } from "react";
// import { FullScreen, useFullScreenHandle } from "react-full-screen";

// export default function App() {
//   const handle = useFullScreenHandle();
//   const [isFullscreen, setFullscreen] = useState(false);

//   // Callback function to handle fullscreen state changes
//   const reportChange = useCallback((state) => {
//     setFullscreen(state);
//   }, []);

//   return (
//     <div
//       className={`flex flex-col items-center justify-center w-full h-screen ${
//         isFullscreen ? "bg-black" : ""
//       }`}
//     >
//       <div className={`w-5/6 space-y-6 text-center md:w-3/6 xl:w-2/6`}>
//         {!isFullscreen && (
//           <button
//             onClick={() => {
//               handle.enter();
//               setFullscreen(true);
//             }}
//             className="btn btn-primary"
//           >
//             START TEST
//           </button>
//         )}

//         <FullScreen
//           onChange={reportChange}
//           className={`${
//             isFullscreen ? "flex flex-col items-center justify-center w-full h-screen" : ""
//           }`}
//           handle={handle}
//         >
//           {isFullscreen && (
//             <button
//               onClick={() => {
//                 handle.exit();
//                 setFullscreen(false);
//               }}
//               className="btn btn-info"
//             >
//               STOP TEST
//             </button>
//           )}
//         </FullScreen>
//       </div>
//     </div>
//   );
// }


