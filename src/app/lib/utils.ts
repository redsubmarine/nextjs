import mongoose, { ConnectionStates } from 'mongoose'

export const connectToDB = async () => {
  const connection = { isConnected: false }
  try {
    if (connection.isConnected) return

    const db = await mongoose.connect(process.env.MONGO!)
    connection.isConnected = db.connection.readyState === ConnectionStates.connected
  } catch (error) {
    throw new Error(`${error}`)
  }
}
