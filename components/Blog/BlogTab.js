import React, { useEffect, useState } from "react";
import styles from "@/styles/Blog.module.css";
import Blog from "./Blog";

const BlogTab = () => {
  const [active, setActive] = useState(1);
  const [allBlogs, setAllBlogs] = useState([]);
  const blogTab = [
    {
      name: "All posts",
    },
    // {
    //   name: "Health & Wellbeing",
    // },
    // {
    //   name: "Psychology",
    // },
    // {
    //   name: "Upbringing",
    // },
  ];

  const token =
    "9e4769d0d6f7087336e46b08d65e145a5cca3ac64c096c1ddf341daf8f0cdea1e8cd96841136a099fad3fa9099b08d0d99cfa65462751ab557105585dec2744ac416ef3b5c0d98268384387f689253382f046b77bab794f7ddcfda761c93966965d73f3d4c15a564dae442d537b017a91d9d0b98158e156416c0a9516abda2d6";

  useEffect(() => {
    fetch("http://localhost:1337/api/blogs?populate=*", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          setAllBlogs(data.data);
        }
      });
  }, []);
  return (
    <div>
      <div className="container mx-auto">
        <div className={styles.blog_tab}>
          {blogTab.map((tab, index) => (
            <button
              className={
                active === index + 1 ? styles.active : styles.deactivate
              }
              onClick={() => setActive(index + 1)}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {active === 1 && <Blog allBlogs={allBlogs} />}
      {active === 2 && <Blog allBlogs={allBlogs} />}
      {active === 3 && <Blog allBlogs={allBlogs} />}
      {active === 4 && <Blog allBlogs={allBlogs} />}
    </div>
  );
};

export default BlogTab;
