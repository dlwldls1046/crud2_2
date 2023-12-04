import AddTopicForm from '@/components/AddTopicForm'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default async function AddTopic() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/signIn')
  }

  return <AddTopicForm />
}