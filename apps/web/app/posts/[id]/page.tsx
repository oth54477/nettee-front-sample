import PageTitle from "@/components/text/PageTitle";
import { Button } from "@workspace/ui/components/button";
import Link from "next/link";
import { ROUTES } from "@/lib/constants/routes";
import { commentAPI, postAPI } from "@/lib/api";
import CommentsSection from "@/app/posts/[id]/_components/CommentsSection";
import DeletePostButton from "@/app/posts/[id]/_components/DeletePostButton";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function PostDetail({ params }: Props) {
  const { id } = await params;

  const [post, comments] = await Promise.all([
    postAPI.get(id),
    commentAPI.getAll(id),
  ]);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <PageTitle>{post.title}</PageTitle>
          <div className="flex gap-2">
            <Button variant="outline">
              <Link
                href={{
                  pathname: ROUTES.postEdit(post.id),
                  query: {
                    id: post.id,
                    title: post.title,
                    content: post.content,
                    author: post.author,
                  },
                }}
              >
                수정
              </Link>
            </Button>
            <DeletePostButton postId={post.id} />
          </div>
        </div>
        <div className="flex justify-between items-center text-sm text-slate-500">
          <span>{post.author}</span>
          <time>{new Date(post.createdAt).toLocaleString()}</time>
        </div>
      </div>

      <div className="p-4 my-4">
        <p className="text-slate-800 whitespace-pre-wrap">{post.content}</p>
      </div>
      <CommentsSection comments={comments} postId={post.id} />

      <div>
        <hr className="mb-4" />
        <Button variant="outline" asChild>
          <Link href={ROUTES.home()}>목록으로</Link>
        </Button>
      </div>
    </div>
  );
}
