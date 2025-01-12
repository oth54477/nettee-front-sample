import { Comment, CreateCommentDTO } from "@/types";

import { httpClient } from "./httpClient";

const commentAPI = {
  getAll(postId: string) {
    return httpClient.get<Comment[]>(`/posts/${postId}/comments`);
  },

  create(postId: string, data: CreateCommentDTO) {
    return httpClient.post<Comment, CreateCommentDTO>(
      `/posts/${postId}/comments`,
      data,
    );
  },
};

export default commentAPI;
