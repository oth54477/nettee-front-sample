import { CreateCommentDTO } from "@/types";
import { commentAPI } from "@/lib/api";
import { useActionState } from "react";

export default function useCreateComment(postId: string) {
  const _createComment = async (state: unknown, formData: FormData) => {
    const commentFormData: CreateCommentDTO = {
      content: formData.get("content") as string,
      author: formData.get("author") as string,
    };

    Object.entries(commentFormData).forEach(([key, value]) => {
      if (!value) {
        return { error: `${key}를 입력해주세요.` };
      }
    });

    let comment: Comment;

    try {
      // API 만들기 전 임시
      await commentAPI.create(postId, commentFormData);
    } catch (error) {
      console.error(error);
      return { error: "게시글 작성에 실패했습니다." };
    }
  };
  return {
    createComment: useActionState(_createComment, undefined),
  };
}
