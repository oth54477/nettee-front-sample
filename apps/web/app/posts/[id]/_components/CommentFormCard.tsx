"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Textarea } from "@workspace/ui/components/textarea";
import { Input } from "@workspace/ui/components/input";
import { Button } from "@workspace/ui/components/button";
import useCreateComment from "@/hooks/useCreateComment";
import { Alert, AlertDescription } from "@workspace/ui/components/alert";

interface Props {
  postId: string;
}

export default function CommentFormCard({ postId }: Props) {
  const {
    createComment: [state, formAction, isPending],
  } = useCreateComment(postId);
  return (
    <Card>
      <CardHeader>
        <CardTitle>댓글 작성</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="flex flex-col gap-2">
          <Textarea
            name="content"
            placeholder={"댓글을 입력해주세요."}
            className="min-h-28"
            required
          />
          <div className="flex items-center gap-4 w-1/3">
            <Input
              name="author"
              placeholder={"작성자"}
              className="h-10 min-w-16"
              required
            />
            <Button type="submit" disabled={isPending}>
              댓글 달기
            </Button>
          </div>
          {state?.error && (
            <Alert variant={"destructive"}>
              <AlertDescription>{state.error}</AlertDescription>
            </Alert>
          )}
        </form>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
