import api from './UserService';

// Interface para o produto
export interface IProduct {
    id_produto?: number;
    nome: string;
    descricao: string;
    valor: number;
    quantidade_atual: number;
}

// Serviço para gerenciar produtos
const ProductService = {
    // Listar todos os produtos
    async getAllProducts() {
        try {
            const response = await api.get('/product');
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
            throw error;
        }
    },

    // Buscar produto por ID
    async getProductById(id: number) {
        try {
            const response = await api.get(`/product/${id}`);
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar produto:', error);
            throw error;
        }
    },

    // Criar um novo produto
    async createProduct(productData: Omit<IProduct, 'id_produto'>) {
        try {
            const response = await api.post('/product', productData);
            return response.data;
        } catch (error) {
            console.error('Erro ao criar produto:', error);
            throw error;
        }
    },

    // Atualizar produto
    async updateProduct(id: number, productData: Omit<IProduct, 'id_produto'>) {
        try {
            const response = await api.put(`/product/${id}`, productData);
            return response.data;
        } catch (error) {
            console.error('Erro ao atualizar produto:', error);
            throw error;
        }
    },

    // Deletar produto
    async deleteProduct(id: number) {
        try {
            await api.delete(`/product/${id}`);
            return true;
        } catch (error) {
            console.error('Erro ao deletar produto:', error);
            throw error;
        }
    }
};

export default ProductService;