import axios from "axios";

export const randomText = async () => {
    const {data} = await axios.get('https://uselessfacts.jsph.pl/random.json')
    return data
}