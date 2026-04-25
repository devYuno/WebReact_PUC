import { render, screen, fireEvent } from '@testing-library/react';
import Register from './register.js';


beforeEach(() => {
  localStorage.clear();
  jest.clearAllMocks();
});

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

test('deve registrar usuário e salvar no localStorage', () => {
  render(<Register />);

  fireEvent.change(screen.getByPlaceholderText('Nome'), {
    target: { value: 'João' },
  });

  fireEvent.change(screen.getByPlaceholderText('Sobrenome'), {
    target: { value: 'Silva' },
  });

  fireEvent.change(screen.getByPlaceholderText('Data de Nascimento'), {
    target: { value: '01/01/2000' },
  });

  fireEvent.change(screen.getByPlaceholderText('Email'), {
    target: { value: 'joao@email.com' },
  });

  fireEvent.change(screen.getByPlaceholderText('Senha'), {
    target: { value: '123' },
  });

  fireEvent.change(screen.getByPlaceholderText('Confirmar Senha'), {
    target: { value: '123' },
  });

  fireEvent.click(screen.getByText('Cadastrar'));

  const stored = JSON.parse(localStorage.getItem('user'));

  expect(stored.email).toBe('joao@email.com');
  expect(mockNavigate).toHaveBeenCalledWith('/');
});


test('deve mostrar erro se campos estiverem vazios', () => {
  render(<Register />);

  fireEvent.click(screen.getByText('Cadastrar'));

  expect(
    screen.getByText('Todos os campos devem ser preenchidos!')
  ).toBeInTheDocument();

  expect(localStorage.getItem('user')).toBeNull();
  expect(mockNavigate).not.toHaveBeenCalled();
});


test('deve impedir cadastro com senhas diferentes', () => {
  render(<Register />);

  fireEvent.change(screen.getByPlaceholderText('Nome'), {
    target: { value: 'João' },
  });

  fireEvent.change(screen.getByPlaceholderText('Sobrenome'), {
    target: { value: 'Silva' },
  });

  fireEvent.change(screen.getByPlaceholderText('Data de Nascimento'), {
    target: { value: '01/01/2000' },
  });

  fireEvent.change(screen.getByPlaceholderText('Email'), {
    target: { value: 'joao@email.com' },
  });

  fireEvent.change(screen.getByPlaceholderText('Senha'), {
    target: { value: '123' },
  });

  fireEvent.change(screen.getByPlaceholderText('Confirmar Senha'), {
    target: { value: '999' },
  });

  fireEvent.click(screen.getByText('Cadastrar'));

  expect(
    screen.getByText('As senhas devem ser iguais.')
  ).toBeInTheDocument();

  expect(localStorage.getItem('user')).toBeNull();
  expect(mockNavigate).not.toHaveBeenCalled();
});