import { CreatePostDTO, Post } from "@/types";
import { postAPI } from "@/lib/api";
import { redirect } from "next/navigation";
import { ROUTES } from "@/lib/constants/routes";
import { useActionState } from "react";

export default function useUpdatePost(postId: string) {
  const _updatePost = async (state: unknown, formData: FormData) => {
    const postFormData: CreatePostDTO = {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      author: formData.get("author") as string,
    };

    Object.entries(postFormData).forEach(([key, value]) => {
      if (!value) {
        return { error: `${key}를 입력해주세요.` };
      }
    });

    let post: Post;

    try {
      // API 만들기 전 임시
      post = await postAPI.update(postId, postFormData);
    } catch (error) {
      return { error: "게시글 수정에 실패했습니다." };
    }

    redirect(ROUTES.postDetail(post.id));
  };

  return {
    updatePost: useActionState(_updatePost, undefined),
  };
}
