<template>
    <q-page padding>
      <div class="row justify-between q-mb-lg">
        <div class="text-h3 text-grey">Edit {{ blogType === 'published' ? 'Published' : 'Saved' }} Blog</div>
        <q-btn no-caps color="accent" label="Configure" icon-right="mdi-cog" @click="configureDialog = !configureDialog" />
      </div>

        <q-card>
          <q-card-section>
            <q-splitter v-model="splitterModel" :limits="[5, 100]" :horizontal="$q.screen.lt.md" style="height: 80vh" >

              <template v-slot:before>
                <div class="q-pa-md">
                  <!-- <Editor /> -->
                  <q-editor
                    v-model="blogContent"
                    :placeholder="writeBlogStatus ? 'Start typing chief...' : 'Please configure the blog first...' "
                    :disable="!writeBlogStatus"
                    :dense="$q.screen.lt.md"
                    :definitions="{
                      save: {
                        tip: 'Save your work',
                        icon: 'save',
                        label: 'Save',
                        handler: saveWork
                      },
                      upload: {
                        tip: 'Upload to cloud',
                        icon: 'cloud_upload',
                        label: 'Upload',
                        handler: uploadIt
                      }
                    }"
                    :toolbar="[
                      [
                        {
                          label: $q.lang.editor.align,
                          icon: $q.iconSet.editor.align,
                          fixedLabel: true,
                          list: 'only-icons',
                          options: ['left', 'center', 'right', 'justify']
                        },
                        {
                          label: $q.lang.editor.align,
                          icon: $q.iconSet.editor.align,
                          fixedLabel: true,
                          options: ['left', 'center', 'right', 'justify']
                        }
                      ],
                      ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
                      ['upload', 'save'],
                      ['token', 'hr', 'link', 'custom_btn'],
                      ['print', 'fullscreen'],
                      [
                        {
                          label: $q.lang.editor.formatting,
                          icon: $q.iconSet.editor.formatting,
                          list: 'no-icons',
                          options: [
                            'p',
                            'h1',
                            'h2',
                            'h3',
                            'h4',
                            'h5',
                            'h6',
                            'code'
                          ]
                        },
                        {
                          label: $q.lang.editor.fontSize,
                          icon: $q.iconSet.editor.fontSize,
                          fixedLabel: true,
                          fixedIcon: true,
                          list: 'no-icons',
                          options: [
                            'size-1',
                            'size-2',
                            'size-3',
                            'size-4',
                            'size-5',
                            'size-6',
                            'size-7'
                          ]
                        },
                        {
                          label: $q.lang.editor.defaultFont,
                          icon: $q.iconSet.editor.font,
                          fixedIcon: true,
                          list: 'no-icons',
                          options: [
                            'default_font',
                            'arial',
                            'arial_black',
                            'comic_sans',
                            'courier_new',
                            'impact',
                            'lucida_grande',
                            'times_new_roman',
                            'verdana'
                          ]
                        },
                        'removeFormat'
                      ],
                      ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

                      ['undo', 'redo'],
                      ['viewsource']
                    ]"
                    :fonts="{
                      arial: 'Arial',
                      arial_black: 'Arial Black',
                      comic_sans: 'Comic Sans MS',
                      courier_new: 'Courier New',
                      impact: 'Impact',
                      lucida_grande: 'Lucida Grande',
                      times_new_roman: 'Times New Roman',
                      verdana: 'Verdana'
                    }"
                  />
                </div>
              </template>

              <template v-slot:separator>
                <q-avatar color="secondary" text-color="white" size="40px" icon="drag_indicator" />
              </template>

              <template v-slot:after>
                <div class="q-pa-md">
                  <div class="q-mb-lg">
                    <q-img v-if="!blogImageFile" src="~assets/img/blogHeader.jpg" style="height: 250px; " />
                    <q-img v-else :src="blogImageFile" style="height: 250px; " />
                  </div>
                  <div v-html="blogContent"></div>
                  <!-- <div> {{ blogContent }} </div> -->
                </div>
              </template>

            </q-splitter>
          </q-card-section>
        </q-card>

        <!-- This will be the configureDialog -->
        <q-dialog v-model="configureDialog" persistent>
          <q-card style="max-width: 800px; width: 100%;">
            <q-card-section class="text-grey text-h5">Blog Settings 😊</q-card-section>
            <q-card-section>
              <div class="row q-col-gutter-md">
                <div class="col-sm-12">
                  <q-input filled v-model="blogTitle" label="Title" />
                </div>
                <div class="col-sm-12">
                  <q-input filled v-model="blogAuthor" label="Author" />
                </div>
                <div class="col-sm-12">
                  <q-select filled v-model="blogCategory" :options="getBlogCategories" label="Select Category" />
                </div>
                <div class="col-sm-12">
                  <q-file filled v-model="file" label="Select Blog Image" counter>
                    <template v-slot:append>
                      <q-avatar>
                        <img src="~assets/img/logo.png">
                      </q-avatar>
                    </template>
                  </q-file>
                </div>
                <div class="col-sm-12 text-center">
                  <q-btn no-caps color="secondary"
                  label="Continue" style="width: 60%;"
                  :disable="!blogTitle.trim().length || !blogCategory.length || !blogImageFile"
                  @click="writeBlogStatus = true"
                  v-close-popup />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-dialog>
    </q-page>
</template>

<script>
// import Editor from 'components/Dashboard/Editor.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Admin-Edit-Blog',
  components: {
    // Editor
  },
  computed: {
    ...mapGetters('alida', ['getBlogPosts']),
    ...mapGetters('alida', ['getSavedBlogPosts']),
    ...mapGetters('alida', ['getBlogCategories'])
  },
  data () {
    return {
      splitterModel: 50,
      configureDialog: false,
      writeBlogStatus: false,
      foundBlogObj: {},
      file: null,
      blogType: '',
      blogId: '',
      blogImageFile: null,
      blogContent: '',
      blogTitle: '',
      blogAuthor: '',
      blogCategory: ''
    }
  },
  mounted () {
    const _ = this
    const blogId = _.$route.params.id
    _.blogType = _.$route.params.blogType
    console.log(_.blogType)
    _.fetchBlogPost(blogId, _.blogType)
  },
  methods: {
    ...mapActions('alida', ['EDIT_BLOG_POST']),
    saveWork () {
      // Mind you, these get's save first online on firestore, before being sent down to the store...
      const _ = this
      var blogObj = {
        id: _.blogId,
        title: _.blogTitle,
        imgUrl: _.blogImageFile,
        author: _.blogAuthor,
        content: _.blogContent,
        time: new Date(),
        category: _.blogCategory
      }
      _.EDIT_BLOG_POST(blogObj, _.blogType)
      _.notifyAlert('info', 'mdi-content-save-all-outline', 'Saved to Database', 'bottom')
    },
    uploadIt () {
      const _ = this
      _.notifyAlert('positive', 'mdi-check-all', 'Successfully uploaded', 'bottom')
    },
    upload_Avatar (input) { /* 👽👽👽 */
      const _ = this
      const reader = new FileReader()
      reader.onload = function () {
        _.blogImageFile = reader.result
      }
      reader.readAsDataURL(input)
      reader.onerror = function () {
        _.notify_alert('negative', reader.error)
      }
    },
    fetchBlogPost (id, type) {
      const _ = this
      // eslint-disable-next-line eqeqeq
      // var currentBlogObj = _.getBlogPosts.filter(blog => blog.id == id)[0]
      // eslint-disable-next-line eqeqeq
      var currentBlogObj = type === 'published'
        // eslint-disable-next-line eqeqeq
        ? _.getBlogPosts.filter(blog => blog.id == id)[0]
        // eslint-disable-next-line eqeqeq
        : _.getSavedBlogPosts.filter(blog => blog.id == id)[0]
      _.blogId = currentBlogObj.id
      _.blogTitle = currentBlogObj.title
      _.blogImageFile = currentBlogObj.imgUrl
      _.blogAuthor = currentBlogObj.author
      _.blogContent = currentBlogObj.content
      _.blogCategory = currentBlogObj.category
    },
    notifyAlert (type, icon, message, position) {
      const _ = this
      _.$q.notify({
        type: type,
        message: message,
        // color: color,
        textColor: 'white',
        icon: icon,
        position: position
      })
    }
  },
  watch: {
    file (val) {
      const _ = this
      val ? _.upload_Avatar(val) : _.blogImageFile = null
    }
  }
}
</script>
