const getPuzzle = async (wordCount)=>{
    const responce = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if(responce.status===200){
        const data = await responce.json()
        return data.puzzle
    }else{
        throw new Error('Unable to get puzzle')
    }
}

const getCountry = async(countryCode) => {
    const responce = await fetch(`http://restcountries.eu/rest/v2/all`)
        if (responce.status === 200) {
            const data = await responce.json()
            return  data.find((country) => country.alpha2Code === countryCode)
        } else {
            throw new Error('Unable to catch country')
        }
}

const getLocation = async() => {
    const responce = await fetch (`http://ipinfo.io/json?token=c7567f5c023aa5`)
        if (responce.status === 200) {
            return responce.json()
        } else {
            throw new Error('Unable to fetch location')
        }  
}

const getCurrentCountry = async ()=>{
    const location = await getLocation()
    return getCountry(location.country)
}

