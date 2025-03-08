"use client";
import { Share2 } from "lucide-react";
import React from "react";

type Props = {
  title: string;
  children?: React.ReactNode;
};

export default function ShareEventPost({ title, children }: Readonly<Props>) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: window.location.href,
        });
      } catch (error) {
        console.error("Error sharing event:", error);
      }
    } else {
      console.log("Something went wrong");
    }
  };

  return (
    <button
      className="my-4 flex items-center gap-2 md:my-0"
      onClick={handleShare}
    >
      <Share2 size={20} className="text-gray-500" />
      <span>{children}</span>
    </button>
  );
}
