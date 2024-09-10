// import { useState, useEffect } from "react";

// const useLinkedInData = () => {
//   const [data, setData] = useState({
//     img: "#",
//     name: "Not available",
//     title: "Not available",
//     info: "Not available",
//   });

//   useEffect(() => {
//     // Create a new div for LinkedIn data and append it to the body
//     const badgeElm = document.createElement("div");
//     badgeElm.id = "data-show"; // Set ID to 'data-show'
//     document.body.appendChild(badgeElm); // Append to the body

//     badgeElm.innerHTML = `
//       <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="dhanrajpatil1220" data-version="v1">
//         <a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/dhanrajpatil1220?trk=profile-badge">
//           Dhanraj Patil
//         </a>
//       </div>
//     `;

//     const loadProfileJs = () => {
//       const script = document.createElement("script");
//       script.onload = () => {
//         const waitObserver = setInterval(() => {
//           const state = badgeElm.querySelector(
//             ".LI-profile-badge .profile-badge__header"
//           );
//           if (state) {
//             clearInterval(waitObserver);
//             const json = {
//               id: "dhanrajpatil1220",
//               img:
//                 badgeElm.querySelector(
//                   "img.profile-badge__content-profile-image"
//                 )?.src || "#",
//               name:
//                 badgeElm.querySelector(".profile-badge__content-profile-name")
//                   ?.innerText || "Not available",
//               title:
//                 badgeElm.querySelector(
//                   ".profile-badge__content-profile-headline"
//                 )?.innerText || "Not available",
//               info:
//                 badgeElm.querySelector(
//                   ".profile-badge__content-profile-company-school-info"
//                 )?.innerText || "Not available",
//             };
//             setData(json);
//           }
//         }, 1000);
//       };
//       script.src = "https://platform.linkedin.com/badges/js/profile.js";
//       document.head.appendChild(script);
//     };

//     loadProfileJs();

//     return () => {
//       // Clean up the injected div and script
//       const script = document.querySelector(
//         'script[src="https://platform.linkedin.com/badges/js/profile.js"]'
//       );
//       if (script) script.remove();

//       // Remove the dynamically created div from the body
//       badgeElm.remove();
//     };
//   }, []);

//   return data;
// };

// export default useLinkedInData;
