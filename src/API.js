// const baseUrl = 'http://localhost:4000';

// useEffect(() => {
//   setIsLoading(false);
// }, [guestList]);

// // Getting all GET/guests
// async function getAllGuests() {
//   setIsLoading(true);
//   const response = await fetch(`${baseUrl}/guests`);
//   const allGuests = await response.json();
//   setGuestList([...allGuestsData]);
// }
// useEffect(() => {
//   getGuestList().catch((error) => console.log(error));
// }, []);

// ///get a single guest GET/guests/:id
// const singleGuest = async () => {
//   const response = await fetch(`${baseUrl}/guests/:id`);
//   const guest = await response.json();
//   console.log(guest);
// };
// singleGuest();

// // create new guest post/guests
// const createNewGuest = async () => {
//   try {
//     const response = await fetch(`${baseUrl}/guests`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ firstName: 'Karl', lastName: 'Horky' }),
//     });
//     const createdGuest = await response.json();
//     console.log(createdGuest);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };
// createNewGuest();

// // updating a guest: PUT/guests:id
// const updateGuest = async (guestID) => {
//   try {
//     const response = await fetch(`${baseUrl}/guests/1`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ attending: true }),
//     });
//     const updatedGuest = await response.json();
//     console.log(updatedGuest);
//   } catch (error) {
//     console.log('Error:', error);
//   }
// };

// updateGuest();
// // delete a guest DELETE/ guests/:id
// const response = await fetch(`${baseUrl}/guests/1`, { method: 'DELETE' });
// const deletedGuest = await response.json();
