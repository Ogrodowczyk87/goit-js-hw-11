import axios from "axios";
export const inputEl = document.querySelector('input[name="searchQuery"]')

export async function fetchImages(page, per_page) {
  const base_url = 'https://pixabay.com/api/';
  const key = '35892900-9e5e4336e30c7cc2bbc144cd3';
  const image = inputEl.value.trim(); 

  const searchParams = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    
  })
   
  const response = await axios.get(`${base_url}?key=${key}&q=${image}&${searchParams}&page=${page}&per_page=${per_page}`);

  return response;
   }