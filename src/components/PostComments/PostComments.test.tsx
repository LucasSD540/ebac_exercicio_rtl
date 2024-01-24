import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    it('Deve ter um comentário escrito "teste 1"', async () => {
        render(<PostComment/>);

        fireEvent.change(screen.getByTestId('comment-text'), {target: {value: 'teste 1'}})

        fireEvent.click(screen.getByTestId('btn-submit'))
        
        await waitFor(() => {
            expect(screen.getByTestId('comment-value')).toHaveTextContent('teste 1')
        })
    })
    it('Deve ter um comentário escrito "teste 2"', async () => {
        render(<PostComment/>);

        fireEvent.change(screen.getByTestId('comment-text'), {target: {value: 'teste 2'}})

        fireEvent.click(screen.getByTestId('btn-submit'))
        
        await waitFor(() => {
            expect(screen.getByTestId('comment-value')).toHaveTextContent('teste 2')
        })
    })
});