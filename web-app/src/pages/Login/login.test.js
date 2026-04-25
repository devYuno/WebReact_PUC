import { render, screen, fireEvent } from '@testing-library/react';
import Login from './login.js';

beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
    localStorage.setItem('user', JSON.stringify({
        nome: "nome",
        sobrenome: "sobrenome",
        dataNascimento: "12/12/2012",
        email: 'teste@email.com',
        senha: '123'
    }));
});

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    useNavigate: () => mockNavigate,
}));

test('deve fazer login com sucesso e navegar', () => {
    render(<Login />);

    fireEvent.change(screen.getByPlaceholderText('Email'), {
        target: { value: 'teste@email.com' },
    });

    fireEvent.change(screen.getByPlaceholderText('Senha'), {
        target: { value: '123' },
    });

    fireEvent.click(screen.getByText('Acessar'));

    expect(mockNavigate).toHaveBeenCalledWith('/home');
});


test('deve mostrar acesso negado com credenciais inválidas', () => {
    render(<Login />);

    fireEvent.change(screen.getByPlaceholderText('Email'), {
        target: { value: 'errado@email.com' },
    });

    fireEvent.change(screen.getByPlaceholderText('Senha'), {
        target: { value: '000' },
    });

    fireEvent.click(screen.getByText('Acessar'));

    expect(screen.getByText('Acesso negado')).toBeInTheDocument();
    expect(mockNavigate).not.toHaveBeenCalled();
});