'use client'

import { Camera } from 'lucide-react'
import { MediaPicker } from './MediaPicker'
import { FormEvent, useState } from 'react'
import Cookie from 'js-cookie'
import { api } from '@/lib/api'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'

interface EditMemoryProps {
  memory: {
    id: string
    coverUrl: string
    content: string
    createdAt: string
    isPublic: boolean
  }
}

dayjs.locale(ptBr)

export function EditMemoryForm({ memory }: EditMemoryProps) {
  const [isPublic, setIsPublic] = useState(memory.isPublic)
  const [editMode, setEditMode] = useState(false)

  async function handleEditMemory(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    const fileToUpload = formData.get('coverUrl') as File
    let coverUrl = memory.coverUrl

    if (fileToUpload.size) {
      const uploadFormData = new FormData()
      uploadFormData.set('file', fileToUpload)

      const uploadResponse = await api.post('/upload', uploadFormData)

      coverUrl = uploadResponse.data.fileUrl
    }

    const token = Cookie.get('token')
    await api.put(
      `/memories/${memory.id}`,
      {
        coverUrl,
        content: formData.get('content'),
        isPublic: formData.get('isPublic'),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
  }

  return (
    <form
      onClick={() => setEditMode(true)}
      onSubmit={handleEditMemory}
      className="flex h-full flex-col gap-4"
    >
      <div className="flex gap-4">
        <label
          htmlFor="media"
          className="flex cursor-pointer items-center gap-1.5 text-sm  text-gray-200 hover:text-gray-100"
        >
          <Camera className="h-4 w-4" />
          Editar foto ou vídeo de capa
        </label>
        <label
          htmlFor="isPublic"
          className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
        >
          <input
            type="checkbox"
            name="isPublic"
            id="isPublic"
            value="true"
            defaultChecked={isPublic}
            onClick={() => {
              setIsPublic(!isPublic)
            }}
            className="h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500"
          />
          Tornar memória pública
        </label>
      </div>

      <div className="flex h-full w-full flex-col gap-2">
        <time className="-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
          {dayjs(memory.createdAt).format('D[ de ]MMMM[, ]YYYY')}
        </time>
        <MediaPicker coverUrl={memory.coverUrl} />
        <textarea
          name="content"
          className="h-full w-full resize-none border-none border-transparent bg-transparent p-0 text-lg leading-relaxed text-gray-100 focus:ring-0"
          defaultValue={memory.content}
        />
      </div>
      <button
        hidden={!editMode}
        className=" self-end rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
        type="submit"
      >
        Editar
      </button>
    </form>
  )
}
