// import { useState } from 'react';
// import styles from './Guest.module.scss';

// const baseUrl =
//   'http://express-guest-list-api-memory-data-store--srpf15.repl.co';

// export default function Guest(props) {
//   const [isAttending, setIsAttending] = useState(props.guest.attending);

//   async function toggleLight() {
//     try {
//       await fetch(`${baseUrl}/guests/${props.guest.id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ attending: !isAttending }),
//       });
//       setIsAttending(!isAttending);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   // console.log(props);

//   return (
//     <div className={styles.guestList}>
//       <div className={styles.guestFullName}>
//         <span>Guest:</span>
//         {props.guest.firstName} {props.guest.lastName}
//       </div>
//       <button
//         className={styles.attendingButton}
//         onClick={() => toggleLight()}
//         style={{ fontSize: '16px' }}
//       >
//         Guest {isAttending ? 'is attending ✅' : 'is not attending ❌'}
//         <input
//           // style={{ display: 'none' }}
//           aria-label={`${props.guest.firstName} ${props.guest.lastName} attending status`}
//           id="checkbox"
//           type="checkbox"
//           onChange={() => setIsAttending(!isAttending)}
//           checked={isAttending}
//         />
//       </button>
//     </div>
//   );
// }
