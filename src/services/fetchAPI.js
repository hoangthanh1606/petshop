import axios from 'axios';

export const login = async () => {
  try {
    const response = await fetch("https://api.petfinder.com/v2/oauth2/token", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
      body: JSON.stringify({
        grant_type: 'client_credentials',
        client_id: process.env.REACT_APP_PETFINDER_API,
        client_secret: process.env.REACT_APP_PETFINDER_SECRET
    })
    });
    if (!response.ok) {
      // throw new Error('Could not fetch token from petfinder.');
      alert('Could not fetch token from petfinder');
    }
    const data = await response.json();
    localStorage.setItem('access_token', data.access_token)
  } catch (error) {
    console.log(error);
  }
};

export const getAnimals = async () => {
  const token = localStorage.getItem("access_token");
  try {
    const response = await axios
    .get('https://api.petfinder.com/v2/animals', {
      headers: {
        "Authorization" : `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response
  } catch (error) {
    console.log(error.response)
    return error.response;
  }

}