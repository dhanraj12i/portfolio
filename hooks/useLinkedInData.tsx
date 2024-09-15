import { useState } from "react";

const useLinkedInData = () => {
  const [data, setData] = useState({
    img: "#",
    name: "Not available",
    title: "Not available",
    info: "Not available",
  });

  const loadProfileData = () => {
    const badgeElm = document.getElementById("data-show")!;
    badgeElm.id = "data-show";

    badgeElm.innerHTML = `
      <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="dhanrajpatil1220" data-version="v1">
        <a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/dhanrajpatil1220?trk=profile-badge">
        </a>
      </div>
    `;

    const loadProfileJs = () => {
      const script = document.createElement("script");
      script.onload = () => {
        const waitObserver = setInterval(() => {
          const state = badgeElm.querySelector(
            ".LI-profile-badge .profile-badge__header"
          );
          if (state) {
            clearInterval(waitObserver);
            const json = {
              id: "dhanrajpatil1220",
              img:
                badgeElm.querySelector(
                  "img.profile-badge__content-profile-image"
                )?.src || "#",
              name:
                badgeElm.querySelector(".profile-badge__content-profile-name")
                  ?.innerText || "Not available",
              title:
                badgeElm.querySelector(
                  ".profile-badge__content-profile-headline"
                )?.innerText || "Not available",
              info:
                badgeElm.querySelector(
                  ".profile-badge__content-profile-company-school-info"
                )?.innerText || "Not available",
            };
            setData(json);
          }
        }, 1000);
      };
      script.src = "https://platform.linkedin.com/badges/js/profile.js";
      document.head.appendChild(script);
    };

    loadProfileJs();
  };

  return { data, loadProfileData };
};

export default useLinkedInData;
