import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// export const setupRealtimeUpdates = (callback) => {
//   const channel = supabase
//     .channel('realtime-sensors')
//     .on(
//       'postgres_changes',
//       {
//         event: '*', // Listen to all events
//         schema: 'public',
//         table: 'Sensors'
//       },
//       (payload) => {
//         callback(payload) // Send updates to component
//       }
//     )
//     .subscribe()

//   return () => {
//     channel.unsubscribe() // Return cleanup function
//   }
// }

// export const getSensorData = async () => {
//   const { data: Sensors, error } = await supabase
//     .from('Sensors')
//     .select('*')
//   return { Sensors, error}
// }

export const getAllSensors = async (handleUpdate) => {  // Accept callback function
  // 1. Get initial data
  const { data, error } = await supabase
    .from('Sensors')
    .select('*')

  // 2. Set up realtime subscription
  const channel = supabase.channel('student-changes')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'Sensors'
      },
      (payload) => {
        // console.log('Change received!', payload)
        handleUpdate(payload)  // Call the callback with new data
      }
    )
    .subscribe()

  return { data, error, channel }
}