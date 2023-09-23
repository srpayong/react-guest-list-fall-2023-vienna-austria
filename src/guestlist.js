import React, { useState } from 'react';

function GuestList() {
  const [guests, setGuests] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const baseUrl = 'http://localhost:4000';

  const addGuest = () => {
    if (firstName.trim() === '' || lastName.trim() === '') {
      return;
    }

    const newGuest = {
      firstName,
      lastName,
      attending: false,
    };

    setGuests([...guests, newGuest]);
    setFirstName('');
    setLastName('');
  };

  const lastNameKeyPress = (e) => {
    if (e.key === 'Return') {
      addGuest();
    }
  };

  const removeGuest = (index) => {
    const updatedGuests = [...guests];
    updatedGuests.splice(index, 1);
    setGuests(updatedGuests);
  };

  const toggleAttendingStatus = (index) => {
    const updatedGuests = [...guests];
    updatedGuests[index].attending = !updatedGuests[index].attending;
    setGuests(updatedGuests);
  };

  return (
    <div>
      <h1>Guest List</h1>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          onKeyPress={lastNameKeyPress}
        />
      </div>
      <button onClick={addGuest}>Add Guest</button>
      <div>
        {guests.map((guest, index) => (
          <div key={`{index-${index.id}`} data-test-id="guest">
            <p>
              Name: {guest.firstName} {guest.lastName}
            </p>
            <p>
              Attending:
              <input
                type="checkbox"
                aria-label={`${guest.firstName} ${guest.lastName} attending status`}
                checked={guest.attending}
                onChange={() => toggleAttendingStatus(index)}
              />
            </p>
            {/* <span> */}
            {/* {guest.attending === true ? 'attending' : 'not attending'}
            </span> */}
            <button
              onClick={() => removeGuest(index)}
              aria-label={`Remove ${guest.firstName} ${guest.lastName}`}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GuestList;

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
