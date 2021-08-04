<template>
  <v-navigation-drawer
    id="wrapper"
    :value="value"
    @input="$emit('input', $event)"
    fixed
    color="sub"
    temporary
    style="width: 70vw"
  >
    <div id="wrapper-contents">
      <v-list id="d-wrapper">
        <v-list-item v-for="drawerItem in drawerItems" :key="drawerItem.id">
          <v-list-item-icon class="icon-wrapper">
            <a :href="drawerItem.link">
              <img class="icon" :src="drawerItem.img" />
            </a>
          </v-list-item-icon>
          <a :href="drawerItem.link">
            <v-list-item-title class="item-text">
              {{ drawerItem.title }}
            </v-list-item-title>
          </a>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list id="d-footer">
        <v-list-item id="d-footer-item">
          <v-list-item-content id="d-footer-item-content">
            <v-list-item-subtitle id="d-footer-item-content-subtitle">
              copyright ©︎suisei
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawerItems: [
        { title: 'Home', id: 1, img: require('../static/mars.png'), link: '/' },
        {
          title: 'Profile',
          id: 2,
          img: require('../static/moon.png'),
          link: '/profile',
        },
        {
          title: 'Live',
          id: 3,
          img: require('../static/mercury.png'),
          link: '/live',
        },
        {
          title: 'Discography',
          id: 4,
          img: require('../static/earth.png'),
          link: '/discog',
        },
        {
          title: 'Music Video',
          id: 5,
          img: require('../static/neptune.png'),
          link: '/mv',
        },
        {
          title: 'News',
          id: 6,
          img: require('../static/saturn.png'),
          link: '/news',
        },
        {
          title: 'BASE(Goods)',
          id: 7,
          img: require('../static/uranus.png'),
          link: 'https://suiseipop.thebase.in/',
        },
        {
          title: 'Reserve',
          id: 8,
          img: require('../static/jupiter.png'),
          link: '/reserve',
        },
      ],
    }
  },
  props: {
    value: {
      type: Boolean,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
$footer-height: 32px;
#d-title {
  &-item {
    padding: 0 44.25px;
    min-height: 0;
    &-content {
      &-title {
        text-align: left;
      }
    }
  }
}
#wrapper {
  #wrapper-contents {
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    width: 70vw;
  }

  #d-wrapper {
    height: calc(100% - #{$footer-height});
    display: flex;
    flex-flow: column;
    .icon-wrapper {
      display: flex;
      align-items: center;
      flex-flow: wrap;
      height: 100%;
      margin: 0 5vw;
      .icon {
        height: max(2rem, 2vmax);
      }
    }
    .item-text {
      font-size: max(1.2rem, 1.7vmax);
    }
  }

  #d-footer {
    margin: 0;
    &-item {
      min-height: 0;
      &-content {
        padding: 0;
        &-subtitle {
          text-align: right;
        }
      }
    }
  }
}
</style>
