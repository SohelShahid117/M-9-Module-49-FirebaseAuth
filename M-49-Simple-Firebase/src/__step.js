/*
1.visit : console.firebase.google.com
2.create project(skip google analytics)
3.register app(create config)
4.install firebase:npm install firebase
5.add config file to your project
6.danger:do not push firebaseConfig to github
7.go to :https://firebase.google.com/docs/auth/web/start?hl=en&authuser=0
(go to : docs>build>web>get started)
8.export app from firebase.config.js & import to Login page as const auth = getAuth(app);
9.add const provider = new GoogleAuthProvider(); in login page from Google Auth
10.const handleGoogleSignIn & enable google in authentication provider

*/