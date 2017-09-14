import React from 'react'

export default () => {
    return (
        <div>
            Super Special Secret Recipe
            <ul>
                <li>1 cup Sugar</li>
                <li>1 cup Salt</li>
                <li>1 cup Salad</li>
            </ul>
        </div>
    )
}

// WE COULD ALSO DO

// import React from 'react'
// import requireAuth from './hoc/requireAuth'

// const Resources = () => {
//     return (
//         <div>
//             Super Special Secret Recipe
//             <ul>
//                 <li>1 cup Sugar</li>
//                 <li>1 cup Salt</li>
//                 <li>1 cup Salad</li>
//             </ul>
//         </div>
//     )
// }

// export default requireAuth(Resources)