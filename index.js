import Autocomplete from './Autocomplete';
import usStates from './us-states';
import './main.css';
import axios from 'axios';

// US States
// const data = usStates.map((state) => ({
//   text: state.name,
//   value: state.abbreviation,
// }));
// new Autocomplete(document.getElementById('state'), {
//   data,
//   onSelect: (stateCode) => {
//     console.log('selected state:', stateCode);
//   },
// });

// Github Users

//fetch users
let text = document.getElementsByClassName('gh-users-group').textContent;

const fetchUsers = async () => {
  try {
    const response = await fetch(
      `https://api.github.com/search/users?q=${text}`,
      {
        method: 'GET',
        credentials: 'same-origin',
      }
    );
    const res = await response.json();

    let users = res.items;

    let data = users.map((user) => ({
      text: user.login,
      value: user.id,
    }));

    new Autocomplete(document.getElementById('gh-user'), {
      data,

      onSelect: (ghUserId) => {
        console.log('selected github user id:', ghUserId);
      },
    });
  } catch (error) {
    console.error(error);
  }
};

fetchUsers();
