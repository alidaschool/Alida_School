<template>
    <q-page padding>
      <div class="row justify-between q-mb-lg">
        <div class="text-h4 text-grey">Write Blog</div>
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
import db, { storage } from 'src/boot/firebase'
// import Editor from 'components/Dashboard/Editor.vue'
import { mapGetters, mapActions } from 'vuex'
import { uid } from 'quasar'
export default {
  name: 'Add-New-Blog-Page',
  components: {
    // Editor
  },
  computed: {
    ...mapGetters('alida', ['getBlogCategories'])
  },
  data () {
    return {
      splitterModel: 50,
      configureDialog: false,
      writeBlogStatus: false,
      file: null,
      blogImageFile: null,
      blogContent: '',
      blogTitle: '',
      blogAuthor: '',
      blogCategory: '',
      blog_image_uid: '',
      blog_image_URL: ''
    }
  },
  mounted () {},
  methods: {
    ...mapActions('alida', ['ADD_NEW_BLOG_POST']),
    saveWork () {
      const _ = this
      if (!_.blogContent.trim().length) {
        _.notifyAlert('info', 'mdi-information', 'Add some contents please', 'bottom')
        return
      }
      // Send Image to the storage bucket first...
      _.upload_image_fireStorage('saved_blog_images', _.file)
    },
    uploadIt () {
      const _ = this
      if (!_.blogContent.trim().length) {
        _.notifyAlert('info', 'mdi-information', 'Add some contents please', 'bottom')
        return
      }
      // Send Image to the storage bucket first...
      _.upload_image_fireStorage('published_blog_images', _.file)
    },
    preview_image (input) { /* 👽👽👽 */
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
    upload_image_fireStorage (type, file) {
      const _ = this
      _.blog_image_uid = uid()
      // Points to the root reference
      var storageRef = storage
      // Points to 'folder Name'
      var imagesRef = storageRef.child(type)
      // var imagesRef = storageRef.child('published_blog_images')
      // 'file' comes from the Blob or File API
      imagesRef.child(_.blog_image_uid).put(file).then((snapshot) => {
        // Retrieveing the file URL, then, uploading it with the entire blog article
        snapshot.ref.getDownloadURL().then(
          function (downloadURL) {
            // You get your url from here
            _.blog_image_URL = downloadURL

            // Check published or save blog
            if (type === 'saved_blog_images') {
              var savedOlogObj = {
                title: _.blogTitle,
                imgUID: _.blog_image_uid,
                imgUrl: downloadURL, /* Will be sent to firestorage first, then generated URL will be stored in db */
                author: _.blogAuthor,
                content: _.blogContent,
                time: new Date(),
                category: _.blogCategory
              }
              // save in the savedBlog DB
              db.collection('savedBlogs').add(savedOlogObj)
                .then((docRef) => {
                  // Clear the blog Contents
                  _.clearContents()
                  console.log('Document written with ID: ', docRef.id)
                  _.notifyAlert('positive', 'mdi-check-all', 'Successfully Saved', 'bottom')
                })
                .catch((error) => {
                  console.error('Error adding document: ', error)
                })
            } if (type === 'published_blog_images') {
              var pubBlogObj = {
                title: _.blogTitle,
                imgUID: _.blog_image_uid,
                imgUrl: downloadURL, /* Will be sent to firestorage first, then generated URL will be stored in db */
                author: _.blogAuthor,
                content: _.blogContent,
                time: new Date(),
                category: _.blogCategory
              }
              // save in the blog DB
              db.collection('blogs').add(pubBlogObj)
                .then((docRef) => {
                  // Clear the blog Contents
                  _.clearContents()
                  console.log('Document written with ID: ', docRef.id)
                  _.notifyAlert('positive', 'mdi-check-all', 'Successfully Uploaded', 'bottom')
                })
                .catch((error) => {
                  console.error('Error adding document: ', error)
                })
            }
          })
      })
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
    },
    clearContents () {
      const _ = this
      _.file = null
      _.blogImageFile = null
      _.blogContent = ''
      _.blogTitle = ''
      _.blogAuthor = ''
      _.blogCategory = ''
    }
  },
  watch: {
    file (val) {
      const _ = this
      console.log(val)
      val ? _.preview_image(val) : _.blogImageFile = null
    }
  }
}
</script>
