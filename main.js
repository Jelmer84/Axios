async function displayPrizes () {
    const response = await axios.get("https://ignoble-api.herokuapp.com/prizes?year=2000"
    );
    // console.log(response.data.prizes)
    const prizelist = document.getElementById("prize-list")
    // console.log(prizelist)

    for (const prize of response.data.prizes) {
        // console.log("Prize", prize)
        const listItem = document.createElement("li")

        listItem.textContent = ` ${prize.year} - ${prize.type} ${prize.description}`;
        /// console.log(listItem)

        prizelist.appendChild(listItem)
    }
}

displayPrizes();