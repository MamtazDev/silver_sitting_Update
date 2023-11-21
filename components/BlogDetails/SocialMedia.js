import React from "react";
import styles from "@/styles/Blog.module.css";
import facebook from "../../public/assets/icons/facebook.png";
import twitter from "../../public/assets/icons/twitter.png";
import linkedin from "../../public/assets/icons/linkedin.png";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <div className="container">
      <div className={styles.social_media}>
        <div>
          <Link href="">
            <img src={facebook.src} alt="" />
          </Link>
          <Link href="">
            <img src={twitter.src} alt="" />
          </Link>
          <Link href="">
            <img src={linkedin.src} alt="" />
          </Link>
        </div>
        <p className="mb-0">Health & Wellbeing</p>
      </div>
    </div>
  );
};

export default SocialMedia;
