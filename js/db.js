// offline data
db.enablePersistence().catch((err) => {
  // probably multiple tabs open at once
  if (err.code === "failed-precondition") {
    console.log("persistence failed");
  } else if (err.code === "unimplemented") {
    // lack of browser support
    console.log("persistence is not available");
  }
});

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
