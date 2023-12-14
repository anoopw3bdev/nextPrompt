"use client"

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { API_URLS, MODES } from '@constants'
import Form from '@components/Form'

const CreatePrompt = () => {
  const router = useRouter();
  const {data: session} = useSession();

  const [submitting, setSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: [],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(API_URLS.CREATE_PROMPT,
        {
          method: 'POST',
          body: JSON.stringify({
            prompt: post.prompt,
            tag: post.tag,
            userId: session?.user.id,
          })
        }
      );
      if(response.ok) {
        setShowToast(true);
        setPost({
          prompt: "",
          tag: [],
        })
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      }
    } catch (error) {
      console.debug(error)
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Form
      type={MODES.CREATE}
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={handleSubmit}
      showToast={showToast}
      setShowToast={setShowToast}
    />
  )
}

export default CreatePrompt