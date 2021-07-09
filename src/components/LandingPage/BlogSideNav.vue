<template>
    <div>
        <q-card-section>
            Categories
            </q-card-section>
            <q-card-section>
            <!-- <q-chip clickable v-ripple :class="currentCat == cat ? 'text-white' : '' " :label="cat" :color="currentCat == cat ? 'secondary' : ''" v-for="cat in getBlogCategories" :key="cat" @click="selectBLogCategory(cat)" /> -->
            <q-chip clickable v-ripple :class="getPersonalBlogCategories.includes(cat) ? 'text-white' : '' " :label="cat" :color="getPersonalBlogCategories.includes(cat) ? 'secondary' : ''" v-for="cat in getBlogCategories" :key="cat" @click="selectBLogCategory(cat)" />
            </q-card-section>
            <q-card-section>
            Recent Posts
            </q-card-section>
            <q-card-section>
            <q-list separator>
              <q-item clickable v-ripple v-for="blog in recent_blog_post" :key="blog.id" :to="{ name: 'Single_Blog_Post', params: { title: blog.title, id: blog.id } }">
                <q-item-section>
                  <q-item-label  lines="2">
                    {{ blog.title }}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
        </q-card-section>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Blog_SideNav-Component',
  computed: {
    ...mapGetters('alida', ['getBlogPosts']),
    ...mapGetters('alida', ['getBlogCategories']),
    ...mapGetters('alida', ['getPersonalBlogCategories']),
    recent_blog_post () {
      const _ = this
      var arr = []
      for (var i = 0; i < _.getBlogPosts.length; i++) {
        if (i < 5) {
          arr.push(_.getBlogPosts[i])
        }
      }
      return arr
    }
  },
  data () {
    return {
      currentCat: 'all'
    }
  },
  methods: {
    ...mapActions('alida', ['CUSTOM_BLOG_CATEGORY']),
    selectBLogCategory (val) {
      const _ = this
      _.CUSTOM_BLOG_CATEGORY(val)
    }
  }
}
</script>
