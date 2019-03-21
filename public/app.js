document.addEventListener('DOMContentLoaded', function() {
    let app = firebase.app();

    fetch('http://localhost:5001/cloudfunctions-yk/us-central1/api/dog')

        .then(console.log)
});
