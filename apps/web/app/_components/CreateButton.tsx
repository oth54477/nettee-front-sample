import Link from "next/link";
import { ROUTES } from "@/lib/constants/routes";
import { Button } from "@workspace/ui/components/button";

export const CreateButton = () => {
  return (
    <Button>
      <Link href={ROUTES.postCreate()}>새 게시글 작성</Link>
    </Button>
  );
};
