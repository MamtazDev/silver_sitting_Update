import React from "react";
import styles from "@/styles/Blog.module.css";
import blog from "../../public/assets/blog.png";
import people from "../../public/assets/icons/people.png";
import share from "../../public/assets/icons/share.png";
import comment from "../../public/assets/icons/comment.png";
import like from "../../public/assets/icons/like.png";
import arrow from "../../public/assets/icons/violet-arrow.png";
import Link from "next/link";

const CurrentPosts = () => {
  return (
    <div className={styles.current_post}>
      <div className="container">
        <div
          style={{ marginBottom: "40px" }}
          className="d-flex justify-content-between"
        >
          <h4>Current Posts</h4>
          <button>View all</button>
        </div>
        <div style={{ marginBottom: "60px" }} className="row gy-4">
          {[1, 2, 3].map((index) => (
            <div
              style={{ minHeight: "560px" }}
              className="col-12 col-md-6 col-lg-4"
            >
              <div className={styles.blog}>
                <img className="img-fluid w-100" src={blog.src} alt="" />
                <div></div>
                <div className={styles.date}>
                  <h5 className="mb-0">19</h5>
                  <p className="mb-0">May 2023</p>
                </div>

                <div className={styles.blog_content}>
                  <div
                    style={{ marginBottom: "22px" }}
                    className="d-flex flex-wrap justify-content-between"
                  >
                    <div>
                      <div className="d-flex align-items-center gap-1">
                        <img src={people.src} alt="" />
                        <p className="mb-0">Daniel Monninger</p>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex align-items-center gap-1">
                        <img src={share.src} alt="" />
                        <p className="mb-0">Share</p>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex align-items-center gap-1">
                        <img src={comment.src} alt="" />
                        <p className="mb-0">0</p>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex align-items-center gap-1">
                        <img src={like.src} alt="" />
                        <p className="mb-0">0</p>
                      </div>
                    </div>
                  </div>
                  <h4>For seniors: childcare despite Corona?</h4>
                  <h6>
                    We live in a time full of challenges: Since the beginning of
                    the year, Corona has been threatening all of our health and
                    even all of our lives.
                  </h6>
                  <Link href="">
                    Read More <img className="ms-1" src={arrow.src} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrentPosts;
