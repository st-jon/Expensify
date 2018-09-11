import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE,
    projectId: process.env.FIREBASE_PROJECTID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config)

const database = firebase.database()

export { firebase, database as default }





//   //child_removed
//     database.ref('expenses').on('child_removed', (snapshot) => {
//         console.log(snapshot.key, snapshot.val())
//     })
//   //child_changed
//     database.ref('expenses').on('child_changed', (snapshot) => {
//         console.log(snapshot.key, snapshot.val())
//     })

//   //child_added
//     database.ref('expenses').on('child_added', (snapshot) => {
//         console.log(snapshot.key, snapshot.val())
//     })
// // database.ref('expenses').once('value')
// //     .then((snapshot) => {
// //         const expenses = []
// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             })
// //         })
// //         console.log(expenses)
// //     })


// // database.ref('expenses').on('value', (snapshot) => {
// //     const expenses = []

// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         })
// //     })
// //     console.log(expenses)
// // })




// //   database.ref('expenses').push({
// //         description: 'café',
// //         amount: 3,
// //         note: 'blab bla',
// //         createdAt: 1
// //   })
// //   database.ref('expenses').push({
// //         description: 'coca',
// //         amount: 5,
// //         note: 'blab bla',
// //         createdAt: 2
// // })
// //     database.ref('expenses').push({
// //         description: 'sandwich',
// //         amount: 10,
// //         note: 'blab bla',
// //         createdAt: 3
// // })
// //   const onValueChange = database.ref()
// //     .on('value', (snapshot) => {
// //         const data = snapshot.val()
// //         console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`)
// //     })

// //     setTimeout(() => {
// //         database.ref().update({
// //             'job/company': 'Google'
// //         })
// //     }, 1500)
    
// //     setTimeout(() => {
// //         database.ref().off('value', onValueChange)
// //     }, 3500)
    
// //     setTimeout(() => {
// //         database.ref().update({
// //             'job/company': 'Zalando'
// //         })
// //     }, 6500)
// //   database.ref('location/city')
// //     .once('value')
// //     .then((snapshot) => {
// //         const val = snapshot.val()
// //         console.log(val)
// //     }).catch((e) => {
// //         console.log('error :', e.message)
// //     })

// //   database.ref().set({
// //     name: 'chris',
// //     age: 37,
// //     stressLevel: 6,
// //     job: {
// //         title: 'software developer',
// //         company: 'Google'
// //     },
// //     location: {
// //         city: 'Berlin',
// //         country: 'Germany'
// //     }
// //   }).then(() => {
// //       console.log('data 1 saved !')
// //   }).catch((e) => {
// //     console.log('error', e)
// //   })

// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'seattle'
// // })

//     // database.ref('isSingle')
//     //     .remove()
//     //     .then(() => {
//     //         console.log('data removed !')
//     //     }).catch((e) => {
//     //         console.log('error:', e)
//     //     })
