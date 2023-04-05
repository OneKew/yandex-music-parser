import {responseBody} from "../utils/response-body.js";


export const parse = async (req, res) => {

    try {
        let list = ''
        const tracks = responseBody['playlist']['tracks']
        tracks.forEach(track => {
            const title = track['title']
            const author = track['artists'][0]['name']
            list += `${author}-${title}\n`
        })
        res.attachment('yandex.txt')
        res.type('txt')
        res.send(list)
    } catch (e) {
        console.log(e);
        res.status(500).json(e.message);
    }
}

// const saveAsCSV = (list) => {
//
//     const csv = `${this.name},${this.phone},${this.email}\n`;
//     try {
//         appendFileSync(“./contacts.csv”, csv);
//     } catch (err) {
//         console.error(err);
//     }
// }
