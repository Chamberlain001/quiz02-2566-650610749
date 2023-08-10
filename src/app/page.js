"use client";

import { PostOwner } from "@/components/PostOwner";
import { Comment } from "@/components/Comment";
import { comments } from "@/libs/comments";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        <PostOwner
          userImagePath="/profileImages/ProfileImg.jpg"
          username="Kitpakorn Thongkot 650610749"
          postText="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"
          likeNum="1000 คน"
        ></PostOwner>
        {comments.map((items) => {
          <Comment
            username={items.username}
            userImagePath={items.userImagePath}
            commentText={items.commentText}
            likeNum={items.likeNum}
          />;
        })}
        ;{/* map-loop render Comment component here */}
      </div>
    </div>
  );
}
