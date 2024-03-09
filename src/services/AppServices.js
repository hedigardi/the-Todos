import axios from 'axios';

const fetchTodos = async () => {
  try {
    const response = await axios.get('https://random-todos.azurewebsites.net/api/todos', {
      headers: {
        'x-api-key': '$2a$10$T6Xd4gMJLTrNeo58vWncdOM/EltSOicKlLMyZCzyJXURlicV6fuoy'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error; 
  }
};

export { fetchTodos };
