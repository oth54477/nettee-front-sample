"use client";

import PageTitle from "@/components/text/PageTitle";
import { Input } from "@workspace/ui/components/input";
import { Textarea } from "@workspace/ui/components/textarea";
import { Button } from "@workspace/ui/components/button";
import { Alert, AlertDescription } from "@workspace/ui/components/alert";
import useUpdatePost from "@/hooks/useUpdatePost";
import { useRouter, useSearchParams } from "next/navigation";

export default function PostCreatePage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const id = searchParams.get("id") as string;
  const title = searchParams.get("title") as string;
  const content = searchParams.get("content") as string;
  const author = searchParams.get("author") as string;

  const {
    updatePost: [state, formAction, isPending],
  } = useUpdatePost(id);

  return (
    <div className={"flex flex-col gap-8"}>
      <div>
        <PageTitle>게시글 수정</PageTitle>
      </div>
      <div>
        <form action={formAction} className={"flex flex-col gap-4"}>
          <Input
            defaultValue={title}
            name={"title"}
            placeholder={"제목을 입력하세요."}
            className={"h-10"}
            required
          />
          <Textarea
            defaultValue={content}
            name={"content"}
            placeholder={"내용을 입력하세요."}
            className={"h-96"}
            required
          />
          <Input
            defaultValue={author}
            name={"author"}
            placeholder={"작성자를 입력하세요."}
            className={"h-10"}
            required
          />
          <div className={"w-full flex justify-end gap-2"}>
            <Button variant={"outline"} onClick={() => router.back()}>
              취소
            </Button>
            <Button type="submit" disabled={isPending}>
              수정하기
            </Button>
          </div>
          {state?.error && (
            <Alert variant={"destructive"}>
              <AlertDescription>{state.error}</AlertDescription>
            </Alert>
          )}
        </form>
      </div>
    </div>
  );
}
