const userUrl = 'http://localhost:2500/api/users/signup';
const loginUrl = 'http://localhost:2500/api/users/login';
const menuUrl = 'http://localhost:2500/api/menus/submit';

    // registertion into this application

      export const signMethode = async ({ email, password, telephone}) => {
        const result = await fetch(userUrl, {
              method: 'POST',
              headers: {"Content-type":"application/json"},
              body: JSON.stringify({ email, password, telephone})
            })
          return result.json()
    
        }

        
      export const loginMethode = async ({ email, password}) => {
        const resforLogin = await fetch(loginUrl, {
              method: 'POST',
              headers: {"Content-type":"application/json"},
              body: JSON.stringify({ email, password})
            })
            console.log(resforLogin)
          return resforLogin.json()
    
        }

    export const submitMenuMethode = async ({ dishname, category, allergy}) => {
          const result = await fetch(menuUrl, {
              method: 'POST',
              headers: {"Content-type":"application/json"},
              body: JSON.stringify({ dishname, category, allergy})
    })
        console.log(result)
    return result.json()

}



        
        /*

export const GetData = async () =>{
     const response = await fetch(url);
     const data = await response.json();
     return data
     
      }

    export const PostData = async ({ title,argument, author}) => {
    const res = await fetch(url, {
          method: 'POST',
          headers: {"Content-type":"application/json"},
          body: JSON.stringify({ title,argument,author})
        })
      return res.json()

    }


    export const DeleteData = (id) =>{ 
     fetch(`${url}/${id}`,{
          method: 'DELETE',
      }).then((data) => {
        return data
      })
   
    }
*/
  