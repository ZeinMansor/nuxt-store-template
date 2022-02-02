export const state = () => ({
    featuredProducts: [],
})

export const mutations = {
    setFeaturedProducts(state, payload) {
        state.featuredProducts = payload
    },
}

export const actions = {
    async getFeaturedProducts({ commit }) {
        const featuredProducts = [
            {
                id: '1',
                name: 'Fountain Pen',
                short_description: 'A very cool Pen',
                brand: 'Pilot',
                imags: ['https://images.unsplash.com/photo-1580127645995-d43fe9598711?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm91bnRhaW4lMjBwZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'],
                price: '60',
                isSale: false,
                salePrice: null,
                thumbnail: 'https://images.unsplash.com/photo-1580127645995-d43fe9598711?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm91bnRhaW4lMjBwZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                features:[
                    'Nib size: 0.3 mm',
                    'Cartriges: 3mml'
                ],
                extras: [
                    'comes with additional 12ml ink bottle'
                ],
                ratting: 3
            },
            {
                id: '2',
                name: 'Ink Bottle',
                short_description: 'Black Ink Bottle',
                full_description: '',
                brand: 'Pilot',
                imags: ['https://images.unsplash.com/photo-1580127645995-d43fe9598711?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm91bnRhaW4lMjBwZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'],
                price: '60',
                isSale: true,
                salePrice: 45,
                thumbnail: 'https://media.istockphoto.com/photos/yellow-and-black-fountain-pen-next-to-a-ink-inkwell-picture-id1343512044?b=1&k=20&m=1343512044&s=170667a&w=0&h=FhZhZI4t13uMaMON36Rd4lR1_8WoQFOfrkxNbOd2Ac8=',
                features:[
                    'Color Blac',
                    '45ml Arabic Inc'
                ],
                extras: [],
                ratting: 3
            },
        ];

        commit('setFeaturedProducts', featuredProducts);
        return;
    }
}