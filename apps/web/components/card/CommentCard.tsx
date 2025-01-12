import { Comment } from "types";
import { Card, CardFooter, CardHeader } from "@workspace/ui/components/card";

export default function CommentCard({ comment }: { comment: Comment }) {
  return (
    <Card>
      <CardHeader>{comment.content}</CardHeader>
      <CardFooter className="flex justify-between items-center text-sm text-slate-600">
        <span>{comment.author}</span>
        <time>{new Date(comment.createdAt).toLocaleString("ko-KR")}</time>
      </CardFooter>
    </Card>
  );
}
