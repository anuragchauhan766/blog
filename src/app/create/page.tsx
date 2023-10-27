"use client";
import { postBlog } from "@/actions/postBlog";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useFormStatus } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
function CreateBlogPage() {
  const { pending } = useFormStatus();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imagesrc, setImagesrc] = useState<string | null>(null);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [inputImage, setInputImage] = useState("");
  const [inputVideo, setInputVideo] = useState("");

  const handleFileInputChangeImage = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = e.target.files;
    setInputImage(e.target.value);
    if (files && files.length > 0) {
      const file = files[0];
      const url = URL.createObjectURL(file);
      setImagesrc(url);
    }
  };
  const handleFileInputChangeVideo = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = e.target.files;
    setInputVideo(e.target.value);

    if (files && files.length > 0) {
      const file = files[0];
      const url = URL.createObjectURL(file);
      setVideoSrc(url);
    }
    console.log(videoSrc);
  };
  const autoHeight = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.currentTarget.style.height = "auto";
    e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
  };
  return (
    <div className="w-full h-full flex justify-center">
      <form
        className="max-w-4xl w-full mt-3 flex flex-col items-center gap-2"
        action={(data) => {
          postBlog(data);
          setTitle("");
          setContent("");
          setImagesrc(null);
          setVideoSrc(null);
          setInputImage("");
          setInputVideo("");
        }}
      >
        <div className="w-full flex items-center justify-between">
          <div className="text-xl font-semibold">Write Your Blog</div>
          <div>
            <Button
              type="submit"
              disabled={pending || !content || !title}
              className="flex items-center justify-center w-20 bg-purple dark:bg-purple dark:text-white dark:hover:bg-purple-dark hover:bg-purple-dark "
            >
              {false ? (
                <Loader2 className=" h-6 w-6 animate-spin" />
              ) : (
                "Publish"
              )}
            </Button>
          </div>
        </div>
        <div className="w-full flex gap-4 flex-col bg-gray-200 dark:bg-black-foreground rounded-2xl p-6">
          <div className="w-full flex  gap-4 items-center px-6">
            <div>
              <Button
                asChild
                variant="outline"
                className="bg-transparent dark:bg-transparent border-2 border-gray-300"
              >
                <label htmlFor="cover-image" className="cursor-pointer">
                  {imagesrc ? "Change Cover Image" : "Add a Cover Image"}
                </label>
              </Button>
              <input
                type="file"
                value={inputImage}
                accept="image/*"
                id="cover-image"
                name="image"
                className="hidden"
                onChange={handleFileInputChangeImage}
              />
            </div>
            <div>
              <Button
                asChild
                variant="outline"
                className="bg-transparent dark:bg-transparent border-2 border-gray-300"
              >
                <label htmlFor="blog-video" className="cursor-pointer">
                  {videoSrc ? "Change Video" : "Add Video"}
                </label>
              </Button>
              <input
                type="file"
                value={inputVideo}
                accept="video/*"
                id="blog-video"
                name="video"
                className="hidden"
                onChange={handleFileInputChangeVideo}
              />
            </div>
          </div>
          <div className="w-full h-full">
            <div className="w-full h-full">
              <div className="w-full h-fit">
                {imagesrc && (
                  <div className="w-full flex items-center justify-center">
                    <div className="relative  aspect-auto rounded-xl mb-2 ">
                      <Image
                        src={imagesrc}
                        alt=""
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="rounded-xl w-auto h-auto max-h-60 object-contain"
                      />
                      <button
                        onClick={() => {
                          setInputImage("");
                          setImagesrc(null);
                        }}
                        className="absolute p-3 rounded-full bg-black/50 hover:bg-black/30 text-white right-2 top-3"
                      >
                        <AiOutlineClose className=" fill-white w-6 h-6" />
                      </button>
                    </div>
                  </div>
                )}
                <textarea
                  className="bg-transparent appearance-none outline-none w-full h-auto resize-none font-extrabold  text-4xl dark:text-white overflow-hidden box-border placeholder:text-4xl placeholder:font-extrabold placeholder:text-neutral-500 py-2 px-6"
                  placeholder="New Blog Title..."
                  rows={1}
                  name="title"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                    autoHeight(e);
                  }}
                ></textarea>
                {videoSrc && (
                  <div className="w-full flex items-center justify-center">
                    <div className="relative  aspect-auto rounded-xl mb-2 ">
                      <video
                        controls
                        preload="auto"
                        className="rounded-xl w-auto h-auto max-h-60 object-contain"
                        src={videoSrc}
                      ></video>
                      <button
                        onClick={() => {
                          setInputVideo("");
                          setVideoSrc(null);
                        }}
                        className="absolute p-3 rounded-full bg-black/50 hover:bg-black/30 text-white right-2 top-3"
                      >
                        <AiOutlineClose className=" fill-white w-6 h-6" />
                      </button>
                    </div>
                  </div>
                )}
                <textarea
                  className="bg-transparent appearance-none outline-none w-full h-auto resize-none font-semibold  text-base dark:text-white overflow-hidden py-2 box-border placeholder:text-base placeholder:font-semibold placeholder:text-neutral-500 px-6"
                  placeholder="Write Your Blog Content here..."
                  name="content"
                  onChange={(e) => {
                    setContent(e.target.value);
                    autoHeight(e);
                  }}
                  value={content}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateBlogPage;
