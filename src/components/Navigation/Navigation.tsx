import styles from "./Navigation.module.scss";
import socialsData from "../../data/socials/socials.json";
import { useEffect, useRef } from "react";

const Navigation = () => {
  const logo = useRef<HTMLAnchorElement>(null);

  const handleScalingBlob = (state: string) => {
    const blobOneElement = document.querySelector(".blob1") as SVGSVGElement;
    const blobTwoElement = document.querySelector(".blob2") as SVGSVGElement;

    const scaleValue = 0.7;

    if (state !== "enter") {
      blobOneElement.style.animationPlayState = "running";
      blobTwoElement.style.animationPlayState = "running";

      blobOneElement.style.scale = "";
      blobTwoElement.style.scale = "";

      return;
    }
    blobOneElement.style.animationPlayState = "paused";
    blobTwoElement.style.animationPlayState = "paused";

    blobOneElement.style.scale = `${scaleValue * 2}`;
    blobTwoElement.style.scale = `${scaleValue}`;
  };

  const handleMouseEnter = () => handleScalingBlob("enter");
  const handleMouseLeave = () => handleScalingBlob("leave");

  useEffect(() => {
    const logoElement = logo!.current!;

    if (logoElement) {
      logoElement.addEventListener("mouseover", handleMouseEnter);
      logoElement.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        logoElement.removeEventListener("mouseover", handleMouseEnter);
        logoElement.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [handleScalingBlob]);

  return (
    <nav>
      <div className={styles.logo}>
        <a
          href={"https://jakubszymanski.dev"}
          ref={logo}
          onMouseOver={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={"/icons/logo.png"} alt={"logo"}></img>
        </a>
      </div>
      <div className={styles.socials}>
        {socialsData.socialIcons.map((socialIcon) => (
          <a href={socialIcon.url} target={"_blank"}>
            <img src={socialIcon.icon} alt={socialIcon.name}></img>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
