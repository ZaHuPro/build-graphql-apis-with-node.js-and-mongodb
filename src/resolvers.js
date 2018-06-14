const products = [{
    _id: '12',
    name: 'GraphQL course',
    qty: 1
}, {
    _id: '13',
    name: 'Nodejs course',
    qty: 1
}]
import Product from './api/product/product.model';

export const resolvers = {
    Query: {
        async allProducts() {
            return await Product.find()
        },
        async getProduct(_, { _id }) {
            return await Product.findById(_id);
        }
    },
    Mutation: {
        async createProduct(_, { input }) {
            return await Product.create(input);
        },
        async updateProduct(_, { _id, input }) {
            return await Product.findOneAndUpdate({ _id }, input, { new: true })
        },
        async deleteProduct(_, { _id }) {
            return await Product.findByIdAndRemove(_id);
        }
    }
}