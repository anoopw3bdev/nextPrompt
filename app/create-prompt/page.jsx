"use client"

import { useState, useLayoutEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { API_URLS, MODES } from '@constants'
import Form from '@components/Form'
import Toast from '@components/Toast'

const CreatePrompt = () => {
  const router = useRouter();
  const {data: session} = useSession();

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: [],
  });

  useLayoutEffect(() => {
    if(!session?.user.id) {
      router.push("/");
    }
  }, [])

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
        console.log(response, "response")
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
    <>
      <Form
        type={MODES.CREATE}
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={handleSubmit}
      />
      <Toast
        type="success"
        message={"Successully created"}
      />
    </>
    
  )
}

export default CreatePrompt