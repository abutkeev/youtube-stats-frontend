import axios from 'axios'

export default {
    async call(method) {
        const url = 'https://abutkeev.ru/youtube-stats/backend/' + method
        try {
            var response = await axios.get(url)

            if (!('result' in response.data)) {
                console.log(response)
                throw new Error('no result in response')
            } else if (response.data.result !== 'success') {
                console.log(response)
                throw new Error('result is not success')
            } else if (!('data' in response.data)) {
                console.log(response)
                throw new Error('no data in response')
            }

            console.log(response.data)
            return response.data.data
        } catch (e) {
            console.log('exception in api call', e)
        }
    }
}
