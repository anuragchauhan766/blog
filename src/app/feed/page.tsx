import BlogCard from "@/components/BlogCard";
import { getBlogs } from "@/lib/queries/blog";
import { ScrollArea } from "@/components/ui/scroll-area";

async function Feed() {
  const blogs = await getBlogs();
  if (!blogs) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="max-w-2xl w-full text-center text-4xl font-extrabold">
          <p>No Blog Found :)</p>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full h-full flex items-center justify-center ">
      <div className="max-w-2xl w-full h-full">
        <div className="w-full h-full flex flex-col space-y-3 overflow-y-auto no-scrollbar p-2">
          {blogs.map((blog) => (
            <BlogCard {...blog} key={blog.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feed;
