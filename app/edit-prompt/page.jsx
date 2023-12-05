"use client"

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { API_URLS, MODES } from '@constants'
import Form from '@components/Form'

const EditPrompt = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const promptId = searchParams.get('id');

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: [],
  });

  useEffect(() => {
    const getPromptDetails = async () => {
        const response = await fetch(API_URLS.GET_PROMPT(promptId))
        const data = await response.json();

        setPost({
            prompt: data.prompt,
            tag: data.tag,
        })
    }

    if(promptId) getPromptDetails()
  }, [promptId])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if(!promptId) return alert("Prompt ID not found")
    try {
      const response = await fetch(API_URLS.CREATE_PROMPT,
        {
          method: 'PATCH',
          body: JSON.stringify({
            prompt: post.prompt,
            tag: post.tag,
          })
        }
      );

      if(response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.debug(error)
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Form
        type={MODES.EDIT}
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={handleSubmit}
    />
  )
}

export default EditPrompt