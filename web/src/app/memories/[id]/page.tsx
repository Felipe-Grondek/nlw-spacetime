import { api } from '@/lib/api'
import { cookies } from 'next/headers'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { EditMemoryForm } from '@/components/EditMemoryForm'

interface Memory {
  id: string
  coverUrl: string
  content: string
  createdAt: string
  isPublic: boolean
}

interface MemoryProps {
  params: {
    id: string
  }
}

dayjs.locale(ptBr)

export default async function DetailMemory({ params }: MemoryProps) {
  const token = cookies().get('token')?.value

  const response = await api.get(`/memories/${params.id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const memory: Memory = response.data

  if (!memory) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col gap-4 p-8">
      <Link
        href="/"
        className="flex items-center gap-2 text-sm text-gray-200 hover:text-gray-100"
      >
        <ArrowLeft className="h-4 w-4" />
        voltar à timeline
      </Link>

      <EditMemoryForm memory={memory} />
    </div>
  )
}
