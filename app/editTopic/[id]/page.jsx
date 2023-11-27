import EditTopicForm from '@/components/EditTopicForm'
import Topic from '@/models/topic'
import React from 'react'


const getTopicById = async (id) => {
  try {
    const apiUrl = process.env.API_URL

    const res = await fetch(`${apiUrl}/api/topics/${id}`, {
      method: 'GET',
      cache: 'no-store'
    })
    if(!res.ok){
      throw new Error('Failed to fetch topic')
    }
    return res.json()
  } catch (error) {
    console.log(error)
  }
} 

export default async function EditTopicPage({params}) {

  const {id} = params
  const {topic} = await getTopicById(id)
  console.log(topic)
  const {title, description} = topic

  return (
    <div>
      <EditTopicForm id={id} title={title} description={description} />
    </div>
  )
}