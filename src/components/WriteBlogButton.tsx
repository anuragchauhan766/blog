import Link from "next/link";
import { Button } from "./ui/button";
import { BsPen } from "react-icons/bs";
function WriteBlogButton() {
  return (
    <Button
      asChild
      className="bg-purple dark:bg-purple  rounded-full hover:bg-purple-dark dark:hover:bg-purple-dark dark:text-white"
    >
      <Link href="/create" className="flex items-center  justify-center gap-2">
        <BsPen />
        Write
      </Link>
    </Button>
  );
}

export default WriteBlogButton;
