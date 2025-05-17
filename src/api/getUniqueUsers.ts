import { database } from './appwrite'
import { type TUniqueUser } from '@/types/user'

export const getUniqueUsers = async (): Promise<TUniqueUser[]> => {
  try {
    const response = await database.listDocuments(
      import.meta.env.VITE_APPWRITER_DATE_BASE_ID || '',
      import.meta.env.VITE_APPWRITER_COLLECTION_ACTIVE_USERS_ID || '',
    )

    return response.documents.map((doc) => ({
      id: doc.$id,
      name: doc.name,
      login: doc.login,
      time: doc.time,
      region: doc.region,
      quetion: doc.quetion,
    })) as TUniqueUser[]
  } catch (error) {
    console.error('Ошибка при получении пользователей:', error)
    return []
  }
}
