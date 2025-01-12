import { CreatePostDTO, Post } from "@/types";
import { postAPI } from "@/lib/api";
import { redirect } from "next/navigation";
import { ROUTES } from "@/lib/constants/routes";
import { useActionState } from "react";

export const useCreatePost = () => {
  const _createPost = async (state: unknown, formData: FormData) => {
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
      post = await postAPI.create(postFormData);
    } catch (error) {
      return { error: "게시글 작성에 실패했습니다." };
    }

    redirect(ROUTES.postDetail(post.id));
  };
};
