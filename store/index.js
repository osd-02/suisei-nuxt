import createPersistedState from "vuex-persistedstate";
export const state = () => ({
  live: null,
  discog: null,
  mv: null,
  news: null,
  profile: null
});

export const getters = {
  live: state => state.live,
  discog: state => state.discog,
  mv: state => state.mv,
  news: state => state.news,
  profile: state => state.profile
};

export const mutations = {
  FETCH_POST_LIVE(state, payload) {
    state.live = payload;
  },
  FETCH_POST_DISCOG(state, payload) {
    state.discog = payload;
  },
  FETCH_POST_MV(state, payload) {
    state.mv = payload;
  },
  FETCH_POST_NEWS(state, payload) {
    state.news = payload;
  },
  FETCH_POST_PROFILE(state, payload) {
    state.profile = payload;
  },
};

export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    const getLive = await app.flamelink.content.get({
      schemaKey: "live",
      populate: true
    });
    const getDiscog = await app.flamelink.content.get({
      schemaKey: "discog",
      populate: true
    });
    const getMv = await app.flamelink.content.get({
      schemaKey: "mv",
      populate: true
    });
    const getNews = await app.flamelink.content.get({
      schemaKey: "news",
      populate: true
    });
    const getProfile = await app.flamelink.content.get({
      schemaKey: "profile",
      populate: true
    });

    
    // 初期データを公開順にソート及び分類に必要なものを追加
    const nowDate = new Date();
    const newsFilterDate = new Date().setMonth(nowDate.getMonth() - 1)

    
    function formatPosts(get) {
      const db = Object.entries(get)
      .map(([k, v]) => {
        const createdDate = new Date(v.postDate);
        v.createdDate = createdDate;
        var year = createdDate.getFullYear();
        var month = createdDate.getMonth() + 1;
        var day = createdDate.getDate();
        v.date = `${year}年${month}月${day}日`
        
        if (v.createdDate > nowDate) {
          v.delete = true;
        } else {
          v.delete = false;
        };
        if (v.createdDate < newsFilterDate) {
          v.newsFilter = true;
        } else {
          v.newsFilter = false;
        };
        return v;
      })
      .sort((a, b) => (a.createdDate > b.createdDate ? -1 : 1));
      
      return db;
    }
    
    const formattedLive = formatPosts(getLive);
    const formattedDiscog = formatPosts(getDiscog);
    const formattedMv = formatPosts(getMv);
    const formattedNews = formatPosts(getNews);

    // 初期データの公開前記事を削除
    let livedb = { ...formattedLive }
    for (const id in livedb) {
      if (livedb[id].delete == true) {
        delete livedb[id]
      };
    }
    let discogdb = { ...formattedDiscog }
    for (const id in discogdb) {
      if (discogdb[id].delete == true) {
        delete discogdb[id]
      };
    }
    let mvdb = { ...formattedMv }
    for (const id in mvdb) {
      if (mvdb[id].delete == true) {
        delete mvdb[id]
      };
    }
    let newsdb = { ...formattedNews }
    for (const id in newsdb) {
      if (newsdb[id].delete == true) {
        delete newsdb[id]
      };
    }
    
    // news欄に使用するデータのフィルター
    // let newpostdb = { ...db }
    // for (const id in newsdb) {
    //   if (newsdb[id].newsFilter == true) {
    //     delete newsdb[id]
    //   };
    // }

    const myprofile = getProfile;
    commit("FETCH_POST_LIVE", livedb);
    commit("FETCH_POST_DISCOG", discogdb);
    commit("FETCH_POST_MV", mvdb)
    commit("FETCH_POST_NEWS", newsdb)
    // commit("FETCH_POST_PROFILE", myprofile.body);
  }
};