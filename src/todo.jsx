// export default function Tudo({task , isDone}){
//     return (
//         <li>Learn With: {task}</li> 
//     )
// }

// export default function Tudo({task , isDone}){
//     if(isDone){
//         return <li>Finised: {isDone}</li>
//     }
//     else{
//         return <li>Work on: {task}</li>
//     }
// }


// export default function Tudo({task , isDone}){
//     if(isDone){
//         return <li>Finised: {isDone}</li>
//     }
//     return <li>work on: {task}</li>
// }


// export default function Tudo({task , isDone}){
//   return (
//     <li>{isDone ? 'Finis' : 'Work-Time'} </li>
//   )
// }

// export default function Tudo({task , isDone}){
//     return (
//       <li>{task} {isDone || ': Do it'}</li>
//     )
//   }

export default function Tudo({task , isDone}){
    return (
      <li>{task} {isDone && ': Done'}</li>
    )
  }