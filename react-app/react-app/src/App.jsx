

function child(){


  const user={

    name :"Amal"
    
  }


  return (

    <parent user={user}/>

  )


}








function parent({user}){

const {name} =user;

return (

  <>
  <h1>{name}</h1>
  </>
)

}

export default parent;