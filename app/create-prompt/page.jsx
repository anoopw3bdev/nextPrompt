"use client"

import { useState } from 'react'
import Form from '@components/Form'

const CreatePrompt = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState("")
  return (
    <Form
        type="Create"
        post={post}
        setPost={setPost}
        submitting={submitting}
        // handleSubmit={handleSubmit}
    />
  )
}

export default CreatePrompt