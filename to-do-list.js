import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  TextField, 
  Button, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemSecondaryAction, 
  IconButton, 
  Paper 
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input) {
      setTodos([...todos, { text: input, id: Date.now() }]);
      setInput('');
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Todo List
        </Typography>
        <TextField
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          label="New Todo"
          variant="outlined"
          margin="normal"
        />
        <Button 
          variant="contained" 
          color="primary" 
          onClick={addTodo}
          fullWidth
        >
          Add Todo
        </Button>
        <List>
          {todos.map((todo) => (
            <ListItem key={todo.id}>
              <ListItemText primary={todo.text} />
              <ListItemSecondaryAction>
                <IconButton 
                  edge="end" 
                  aria-label="delete" 
                  onClick={() => removeTodo(todo.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default TodoList;