import Link from "next/link";
import { Button } from "./ui/button";
import { BsPen } from "react-icons/bs";
function WriteBlogButton() {
  return (
    <Button
      asChild
      className="bg-purple dark:bg-purple  rounded-full hover:bg-purple-dark dark:hover:bg-purple-dark dark:text-white h-10 w-10 xs:w-auto px-2 py-2  xs:px-4 xs:py-2"
    >
      <Link href="/create" className="flex items-center  justify-center gap-2 ">
        <BsPen />
        <span className="hidden xs:inline">Write </span>
      </Link>
    </Button>
  );
}

export default WriteBlogButton;
