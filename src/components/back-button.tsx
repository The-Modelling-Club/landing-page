"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <Button
      variant={"link"}
      type="button"
      className="mb-6 flex items-center gap-2 p-0 py-4"
      onClick={() => router.back()}
    >
      <ArrowLeftIcon size={14} />
      Back
    </Button>
  );
}
