import axios from 'axios';

const fetchTodos = async () => {
  try {
    const response = await axios.get('https://random-todos.azurewebsites.net/todos?apikey=$2a$10$T6Xd4gMJLTrNeo58vWncdOM/EltSOicKlLMyZCzyJXURlicV6fuoy&amount=5&randomdone=false');
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};

export { fetchTodos };