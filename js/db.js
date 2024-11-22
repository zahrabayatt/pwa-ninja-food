// real-time listener
db.collection("recipes").onSnapshot((snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === "added") {
      // add the document dat to the web page
      renderRecipe(change.doc.data(), change.doc.id);
    }

    if (change.type === "removed") {
      // remove the document data from the web page
    }
  });
});
