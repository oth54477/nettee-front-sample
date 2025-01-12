import Link from "next/link";
import { ROUTES } from "@/lib/constants/routes";
import { Button } from "@workspace/ui/components/button";

interface Props {
  content: string;
}

export default function PostCreateButton({ content }: Props) {
  return (
    <Button asChild>
      <Link href={ROUTES.postCreate()}>{content}</Link>
    </Button>
  );
}
