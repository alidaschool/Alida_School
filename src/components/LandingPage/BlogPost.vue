<template>
    <div>
        <div class="row q-col-gutter-md q-mb-lg">
            <div class="col-sm-6" v-for="blog in getFilteredBlogPosts" :key="blog.id" @click="$router.push({ name: 'Single_Blog_Post', params: { title: blog.title, id: blog.id} })">
                <q-card clickable v-ripple >
                    <img :src="blog.imgUrl" style="height: 250px;">

                    <q-card-section>
                        <div class="text-h6"> {{ blog.title }} </div>
                        <div class="text-subtitle2 text-grey">by {{ blog.author }} | {{ new Date(blog.time).toDateString() }}</div>
                    </q-card-section>

                    <!-- <q-card-section class="q-pt-none" ellipsis v-html="blog.content" ></q-card-section> -->
                </q-card>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Blog_Post-Component',
  computed: {
    ...mapGetters('alida', ['getFilteredBlogPosts'])
  }
}
</script>
