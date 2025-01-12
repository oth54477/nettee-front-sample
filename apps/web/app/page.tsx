import { ROUTES } from "@/lib/constants/routes";
import Link from "next/link";
import PostCreateButton from "@/app/_components/PostCreateButton";
import PageTitle from "@/components/text/PageTitle";
import PostCard from "@/components/card/PostCard";
import { postAPI } from "@/lib/api";

export default async function Page() {
  const posts = await postAPI.getAll();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <PageTitle>게시글 목록</PageTitle>
        <PostCreateButton content={"새 게시글 작성"} />
      </div>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <Link key={post.id} href={ROUTES.postDetail(post.id)}>
            <PostCard post={post} />
          </Link>
        ))}
      </div>
    </div>
  );
}
