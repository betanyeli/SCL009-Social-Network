export let nameUser = '';
export let msjUser = '';
export const createPost = () =>{ //funciona pero se duplican los post por user
    let db = firebase.firestore();
    let user = firebase.auth().currentUser;
    let userSignIn = user.uid;
    let msj = document.getElementById("post").value;
    //let data = []
    //not working with currentUser... trying with frog observer!
    //firebase.auth().onAuthStateChanged(user=> {
        db.collection("users").doc(userSignIn).get().then(doc=> {
            db.collection("post").add({
                //name: doc.data().name,
               userSignIn,
              msj
            
            }).then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
           // console.log(`${doc.id} => ${doc.data()}`);
           
            }).catch(function(error) {
                console.log("Error getting documents: ", error);
            });
           
            //showPost()
        });
       
    //});
}

//leer el alias
export const readNameDB = () => {
   

let db = firebase.firestore();
let user = firebase.auth().currentUser;

db.collection("users").where ("uid", "==" ,user.uid)
.get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.data().name);
 nameUser = doc.data().name;
 document.getElementById('ur-welcome').innerHTML= nameUser;


        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

}

// export const readPosts = () => {
//     let db = firebase.firestore();
//     let user = firebase.auth().currentUser;
    
//     db.collection("post").where ("uid", "==" ,user.uid)
//     .get()
//         .then(function(querySnapshot) {
//             querySnapshot.forEach(function(doc) {
//                 // doc.data() is never undefined for query doc snapshots
//                 console.log(doc.data().id);
//      msjUser = doc.data().id;
     
//      document.getElementById('text-post').innerHTML= msjUser;
    
    
//             });
//         })
//         .catch(function(error) {
//             console.log("Error getting documents: ", error);
//         });
    
//     }
    





