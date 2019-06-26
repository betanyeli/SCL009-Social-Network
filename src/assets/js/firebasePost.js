//import { templateProject } from '../views/templateProject.js';
import { showUserNameInProject } from '../views/templateProject.js';
let nameUser = '';


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
            
            }).then(docRef => {
                console.log("Document written with ID: ", docRef.id);
            });
            console.log(`${doc.id} => ${doc.data()}`);
            //showPost()
        });
     
   
}
 
//leer el alias


export const readNameDB = () => {
let db = firebase.firestore();
let user = firebase.auth().currentUser;

if (user != null){
db.collection("users").where ("uid", "==" ,user.uid)
.get()
    .then(querySnapshot => {
        querySnapshot.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data().name);
nameUser = doc.data().name;


showUserNameInProject(nameUser);
        });


    })
    .catch(error =>{
        console.log("Error getting documents: ", error);
    });


}

}

