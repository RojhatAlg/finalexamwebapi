import mongoose from 'mongoose';
const MONG_URL_USERS='mongodb+srv://root:test123@cluster0.dx7irbq.mongodb.net/?retryWrites=true&w=majority'
const MONG_URL_MENUS='sdfsfdgsfdt'
const getUserMethode = async () => {
     try {
          const con = await mongoose.connect(MONG_URL_USERS)
          console.log("connection was ok")
          
     } catch (error) {
          console.log("disconned",+ error)
     }

}
   export default getUserMethode;





