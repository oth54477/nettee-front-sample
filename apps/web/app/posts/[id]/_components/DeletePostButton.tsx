"use client";

import { Button } from "@workspace/ui/components/button";
import { postAPI } from "@/lib/api";

interface Props {
  postId: string;
}

export default function DeletePostButton({ postId }: Props) {
  const deletePost = () => postAPI.delete(postId);

  return (
    <Button variant="destructive" onClick={deletePost}>
      삭제
    </Button>
  );
}
