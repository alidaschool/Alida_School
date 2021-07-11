<template>
    <q-page class="flex flex-center">
        <q-card flat class="q-ma-sm q-pa-lg" >
            <div class="text-center text-h3 q-mb-lg">Login Mr. President 🥰</div>
            <div class="row q-col-gutter-md">
                <div class="col-12">
                    <q-input v-model="loginDetails.email" filled label="Enter Email: " />
                </div>
                <div class="col-12">
                    <q-input v-model="loginDetails.password" :type="isPwd ? 'password' : 'text' " filled label="Enter Password: ">
                        <template #append>
                            <q-icon :name="isPwd ? 'mdi-eye-off' : 'mdi-eye' " @click="isPwd = !isPwd" />
                        </template>
                    </q-input>
                </div>
                <div class="col-12 text-center" style="width: 100%;">
                    <q-btn rounded no-caps color="primary" label="Login" style="width: 70%;" :loading="serverBtn" @click="signInWithEmailPassword()">
                        <template #loading>
                            <q-spinner-ball />
                        </template>
                    </q-btn>
                </div>
            </div>
        </q-card>
    </q-page>
</template>

<script>
import { mapActions } from 'vuex'
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
  name: 'Login-Page',
  data () {
    return {
      serverBtn: false,
      loginDetails: {
        email: '',
        password: ''
      },
      isPwd: true
    }
  },
  mounted () {
  },
  methods: {
    ...mapActions('alida', ['LOAD_FIREBASE_USER']),
    ...mapActions('alida', ['pwd']),
    signInWithEmailPassword () {
      const _ = this
      const { email, password } = _.loginDetails
      //   var email = 'g.ikwegbu@gmail.com'
      //   var password = 'georgeAlidaSchoolInstructor'
      if (!email.trim().length || !password.trim().length) {
        return
      }
      _.serverBtn = true
      // [START auth_signin_password]
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          _.serverBtn = false
          // Signed in
          var user = userCredential.user
          var _obj = {
            displayName: user.displayName,
            email: user.email,
            emailVerified: user.emailVerified,
            token: user.l,
            uid: user.uid,
            refreshToken: user.refreshToken,
            lat: user._lat
          }
          _.pwd(password)
          _.LOAD_FIREBASE_USER(_obj)
          _.$router.replace({
            name: 'Dashboard'
          })
          // ...
        })
        .catch((error) => {
          _.serverBtn = false
          _.notifyAlert('negative', 'mdi-alert', error.message, 'bottom')

          var errorCode = error.code
          var errorMessage = error.message
          console.log(errorCode + '\n' + errorMessage)
        })
      // [END auth_signin_password]
    },
    sendPasswordReset () {
      const email = 'sam@example.com'
      // [START auth_send_password_reset]
      firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
          // Password reset email sent!
          // ..
        })
        .catch((error) => {
          var errorCode = error.code
          var errorMessage = error.message
          console.log(errorCode + '\n' + errorMessage)
          // ..
        })
      // [END auth_send_password_reset]
    },
    sendEmailVerification () {
      // [START auth_send_email_verification]
      firebase.auth().currentUser.sendEmailVerification()
        .then(() => {
          // Email verification sent!
          // ...
        })
      // [END auth_send_email_verification]
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
  }
}
</script>
