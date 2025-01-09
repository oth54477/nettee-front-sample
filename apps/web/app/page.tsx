import PageTitle from "@/app/_components/PageTitle";
import Link from "next/link";
import { CreateButton } from "@/app/_components/CreateButton";
import { Post } from "@workspace/ui/types";
import { PostCard } from "@/app/_components/PostCard";

export default function Page() {
  const posts: Post[] = [
    {
      id: "1735801340237",
      title: "테스트",
      content: "테스트\r\n테스트",
      author: "테스트",
      createdAt: "2025-01-02T07:02:20.237Z",
      updatedAt: "2025-01-02T13:50:38.431Z",
    },
    {
      id: "1735801340238",
      title: "테스트",
      content: "테스트\r\n테스트",
      author: "테스트",
      createdAt: "2025-01-02T07:02:20.237Z",
      updatedAt: "2025-01-02T13:50:38.431Z",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <PageTitle />
        <CreateButton />
      </div>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <Link key={post.id} href={``}>
            <PostCard post={post} />
          </Link>
        ))}
      </div>
    </div>
  );
}
