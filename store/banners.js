export const state = () => ({
  homePageBanner: [
    {
      id: 1,
      text: "Slide 1 text",
      img: "https://picsum.photos/1920/1080?random",
    },
    {
      id: 2,
      text: "Slide 2 text",
      img: "https://picsum.photos/1920/1080?random",
    },
    {
      id: 3,
      text: "Slide 3 text",
      img: "https://picsum.photos/1920/1080?random",
    },
    {
      id: 4,
      text: "Slide 4 text",
      img: "https://picsum.photos/1920/1080?random",
    },
  ],
});

export const mutations = {
  setHomePageBanner(state, payload) {
    state.homePageBanner = payload;
  },
};

export const actions = {
	async getHomeBanners({ commit, state }) {
		
	}
};
