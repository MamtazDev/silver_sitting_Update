import BlogDetailsBanner from "@/components/BlogDetails/BlogDetailsBanner";
import ChancellorSpeech from "@/components/BlogDetails/ChancellorSpeech";
import Comments from "@/components/BlogDetails/Comments";
import CurrentPosts from "@/components/BlogDetails/CurrentPosts";
import PocketGuide from "@/components/BlogDetails/PocketGuide";
import SocialMedia from "@/components/BlogDetails/SocialMedia";
import Study from "@/components/BlogDetails/Study";
import TypesTabs from "@/components/BlogDetails/TypesTabs";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function BlogDetails () {
  const router = useRouter();
  const { slug } = router.query;

  const [blogDetails, setBlogDetails]=useState(null)



  const token = "9e4769d0d6f7087336e46b08d65e145a5cca3ac64c096c1ddf341daf8f0cdea1e8cd96841136a099fad3fa9099b08d0d99cfa65462751ab557105585dec2744ac416ef3b5c0d98268384387f689253382f046b77bab794f7ddcfda761c93966965d73f3d4c15a564dae442d537b017a91d9d0b98158e156416c0a9516abda2d6"



  console.log(blogDetails,"ddd")

  useEffect(()=>{
 fetch(`http://localhost:1337/api/blogs/${slug}?populate=*`,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then(res=>res.json())
    .then(data=>{
      if(data?.data)
      setBlogDetails(data.data)
    })
  },[slug])
  return (
    <section>
      <BlogDetailsBanner blogDetails={blogDetails}/>
      <ChancellorSpeech blogDetails={blogDetails}/>
      <PocketGuide blogDetails={blogDetails}/>
      <Study blogDetails={blogDetails}/>
      <TypesTabs blogDetails={blogDetails}/>
      <SocialMedia blogDetails={blogDetails}/>
      <CurrentPosts blogDetails={blogDetails}/>
      <Comments blogDetails={blogDetails}/>
    </section>
  );
};


