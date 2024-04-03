import mongoose, { ConnectionStates } from 'mongoose'

const connection = { isConnected: false }

export const connectToDB = async () => {
  console.log('connection.isConnected', connection.isConnected)
  try {
    if (connection.isConnected) return

    const db = await mongoose.connect(process.env.MONGO!)
    connection.isConnected = db.connection.readyState === ConnectionStates.connected
  } catch (error) {
    throw new Error(`${error}`)
  }
}
