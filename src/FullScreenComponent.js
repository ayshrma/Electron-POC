// import './App.css';

import { useState } from "react"
export default function FullScreenComponent() {
    const [isFullscreen, setFullscreen] = useState(false)
  
    const makeFullscreen = () => {
      setFullscreen(true)
      document.documentElement.requestFullscreen()
    }
  
    const closeFullscreen = () => {
      setFullscreen(false)
      document.exitFullscreen()
    }
  
    console.log(isFullscreen)
    return (
      <div
        className={`flex flex-col items-center justify-center w-full h-screen ${
          isFullscreen ? "bg-black" : ""
        }`}
      >
        <div
          className={`w-5/6 space-y-6 text-center wrapper ${
            isFullscreen ? "hidden" : "visible"
          }`}
        >
          <button
            onClick={makeFullscreen}
            className={`btn btn-primary ${!isFullscreen ? "visible" : "hidden"}`}
          >
            FUll Screen
          </button>
        </div>
        <button
          onClick={closeFullscreen}
          className={`btn btn-accent ${isFullscreen ? "visible" : "hidden"}`}
        >
          Small screen
        </button>
      </div>
    )
  }
  




  // import { useState, useCallback } from "react";
// import { FullScreen, useFullScreenHandle } from "react-full-screen";

// export default function FullScreenComponent() {
//   const handle = useFullScreenHandle();
//   const [isFullscreen, setFullscreen] = useState(false);

//   const reportChange = useCallback((state) => {
//     setFullscreen(state);
//   }, []);

//   return (
//     <div
//       className={`flex flex-col items-center justify-center w-full h-screen ${
//         isFullscreen ? "bg-black" : ""
//       }`}
//     >
//       <div className="w-5/6 space-y-6 text-center md:w-3/6 xl:w-2/6">
//         {!isFullscreen ? (
//           <button
//             onClick={() => {
//               handle.enter();
//               setFullscreen(true);
//             }}
//             className="btn btn-primary"
//             aria-label="Start fullscreen test"
//           >
//             START TEST
//           </button>
//         ) : (
//           <FullScreen
//             onChange={reportChange}
//             handle={handle}
//           >
//             <button
//               onClick={() => {
//                 handle.exit();
//                 setFullscreen(false);
//               }}
//               className="btn btn-info"
//               aria-label="Stop fullscreen test"
//             >
//               STOP TEST
//             </button>
//           </FullScreen>
//         )}
//       </div>
//     </div>
//   );
// }
