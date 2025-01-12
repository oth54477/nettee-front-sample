import { SectionTitle } from "@/components/text/SectionTitle";
import CommentFormCard from "@/app/posts/[id]/_components/CommentFormCard";
import CommentCard from "@/components/card/CommentCard";
import { Comment } from "types";

interface Props {
  postId: string;
  comments: Comment[];
}

export default function CommentsSection({ postId, comments }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <SectionTitle title={"댓글"} />
      {comments.map((comment, index) => (
        <CommentCard comment={comment} key={index} />
      ))}
      <CommentFormCard postId={postId} />
    </div>
  );
}
