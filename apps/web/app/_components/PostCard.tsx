import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Post } from "@workspace/ui/types";

export const PostCard = ({ post }: { post: Post }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{post.content}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center text-sm text-slate-600">
        <span>{post.author}</span>
        <time>{new Date(post.createdAt).toLocaleDateString("ko-KR")}</time>
      </CardFooter>
    </Card>
  );
};
