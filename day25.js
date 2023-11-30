// Challenge 25
// Description:
// Write a function getData that returns a Promise. Use this function to fetch data from two different APIs sequentially, and return the combined result.
// Use any random API that you want
// Solution Approach:
// Utilize the .then method to chain promises.
const getOneData = async (url) =>
    new Promise((res) =>
        fetch(url).then(async response => 
            res(await response.json())))

const getData = async () => {
    const firstData = await getOneData('https://catfact.ninja/fact');
    const secondData = await getOneData('https://www.boredapi.com/api/activity');
    return { ...firstData, ...secondData };
};

getData().then(finalRes => console.log(finalRes));
