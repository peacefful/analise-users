import { database } from './appwrite'

export const getActiveUsers = async () => {
  try {
    const response = await database.listDocuments(
      import.meta.env.VITE_APPWRITER_DATE_BASE_ID || '',
      import.meta.env.VITE_APPWRITER_COLLECTION_ID || '',
    )

    return response.documents
  } catch (error) {
    console.error('Ошибка при создании пользователя:', error)
  }
}
