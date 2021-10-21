export const state = () => ({
  live: null,
  discog: null,
  mv: null,
  news: null,
  profile: null,
  newPosts: null,
})

export const getters = {
  live: (state) => state.live,
  discog: (state) => state.discog,
  mv: (state) => state.mv,
  news: (state) => state.news,
  profile: (state) => state.profile,
  newPosts: (state) => state.newPosts,
}

export const mutations = {
  FETCH_POST_LIVE(state, payload) {
    state.live = payload
  },
  FETCH_POST_DISCOG(state, payload) {
    state.discog = payload
  },
  FETCH_POST_MV(state, payload) {
    state.mv = payload
  },
  FETCH_POST_NEWS(state, payload) {
    state.news = payload
  },
  FETCH_POST_PROFILE(state, payload) {
    state.profile = payload
  },
  FETCH_POST_NEWPOSTS(state, payload) {
    state.newPosts = payload
  },
}

export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    const getLive = await app.flamelink.content.get({
      schemaKey: 'live',
      populate: true,
    })
    const getDiscog = await app.flamelink.content.get({
      schemaKey: 'discog',
      populate: true,
    })
    const getMv = await app.flamelink.content.get({
      schemaKey: 'mv',
      populate: true,
    })
    const getNews = await app.flamelink.content.get({
      schemaKey: 'news',
      populate: true,
    })
    const getProfile = await app.flamelink.content.get({
      schemaKey: 'profile',
      populate: true,
    })

    // 初期データを公開順にソート及び分類に必要なものを追加
    const nowDate = new Date()
    const newsFilterDate = new Date().setMonth(nowDate.getMonth() - 1)

    function formatPosts(get) {
      let db = Object.entries(get)
        .map(([k, v]) => {
          const createdDate = new Date(v.postDate)
          v.createdDate = createdDate
          var year = createdDate.getFullYear()
          var month = createdDate.getMonth() + 1
          var day = createdDate.getDate()
          v.date = `${year}年${month}月${day}日`

          if (v.createdDate > nowDate) {
            v = null
          }
          if (v.createdDate > newsFilterDate) {
            v.newsFilter = true
          } else {
            v.newsFilter = false
          }
          return v
        })
        .sort((a, b) => (a.createdDate > b.createdDate ? -1 : 1))

      return db
    }

    function sortNews(db) {
      let filtereddb = {}
      db.map((k) => {
        if (k.newsFilter == true) {
          filtereddb = Object.assign(filtereddb, k)
        }
      })
      return filtereddb
    }

    function chooseNews(live, discog, mv, news) {
      let returndb
      const sortedLive = sortNews(live)
      const sortedDiscog = sortNews(discog)
      const sortedMv = sortNews(mv)
      const sortedNews = sortNews(news)

      returndb = Object.assign(sortedLive, sortedDiscog, sortedMv, sortedNews)

      let returnArray = [returndb]

      return returnArray
    }

    const livedb = formatPosts(getLive)
    const discogdb = formatPosts(getDiscog)
    const mvdb = formatPosts(getMv)
    const newsdb = formatPosts(getNews)

    const newPostsdb = chooseNews(livedb, discogdb, mvdb, newsdb)

    console.log(newPostsdb)
    console.log(newsdb)

    const myprofile = getProfile
    commit('FETCH_POST_LIVE', livedb)
    commit('FETCH_POST_DISCOG', discogdb)
    commit('FETCH_POST_MV', mvdb)
    commit('FETCH_POST_NEWS', newsdb)
    commit('FETCH_POST_NEWPOSTS', newPostsdb)
    commit("FETCH_POST_PROFILE", myprofile);
  },
}
