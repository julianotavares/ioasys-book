import { renderHook, act } from '@testing-library/react-hooks';
import { useAuth, AuthProvider } from '@contexts/auth';

jest.mock('', () => {
  return {
    signIn: () => {
      return {
        type: 'success',
        user: {
          id: '1',
          name: 'User Test',
          email: 'teste@teste.com.br',
          password: 'test',
          gender: 'male',
        },
      };
    },
  };
});

describe('Auth Hooks', () => {
  it('should be able to sign in', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    // Utilizei os dados reais de login para validar o teste em desenvolvimento. Não devemos utilizar esse cenário em produção.
    await act(() => result.current.signIn('desafio@ioasys.com.br', '12341234'));

    expect(result.current.signed).toBeTruthy();
  });
});
