axios.get("https://sv443.net/jokeapi/category/Miscellaneous?blacklistFlags=nsfw").then(response => {
        console.log(response);
        console.log(response.data.setup);
        console.log(response.data.delivery);
    })
    .catch(error => {
        console.log(error);
    });

    console.log("hi");