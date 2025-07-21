"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

// ✅ Create a separate component for the content that uses useSearchParams
const UpdatePromptContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");

  const [post, setPost] = useState({ prompt: "", tag: "" });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/prompt/${promptId}`);
      const data = await response.json();

      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
    };

    if (promptId) getPromptDetails();
  }, [promptId]);

  const updatePrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!promptId) return alert("Missing PromptId!");

    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type='Edit'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  );
};

// ✅ Loading component
const UpdatePromptLoading = () => {
  return (
    <div className="w-full max-w-full flex-start flex-col">
      <div className="animate-pulse">
        <div className="h-12 bg-gray-200 rounded-md mb-4 w-1/3"></div>
        <div className="h-4 bg-gray-200 rounded-md mb-6 w-2/3"></div>
        <div className="space-y-4">
          <div className="h-32 bg-gray-200 rounded-md"></div>
          <div className="h-10 bg-gray-200 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

// ✅ Main component wrapped with Suspense
const UpdatePrompt = () => {
  return (
    <Suspense fallback={<UpdatePromptLoading />}>
      <UpdatePromptContent />
    </Suspense>
  );
};

export default UpdatePrompt;