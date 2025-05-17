import { Client, Databases } from 'appwrite'

export const client = new Client()

client.setEndpoint('https://cloud.appwrite.io/v1')

client.setProject(import.meta.env.VITE_APPWRITER_PROJECT_ID || '')

export const database = new Databases(client)
