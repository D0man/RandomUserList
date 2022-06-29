
type LocationUser = {
    country: string;
}

type NameUser = {
    first: string;
    last: string;
    title: string;
}

type PictureUser = {
     large: string;
}

type RandomUser = {
    location: LocationUser;
    name: NameUser;
    picture: PictureUser; 
  
}

type info = {
    seed: string;
    results: number;
    page: number;
    version: string
}

export type RandomUsers = {
    results: RandomUser[];
    info: info[];
}
type Error = "Error"

export async function getRandomUsers(page = 1,seed = "", results = 25): Promise<RandomUsers|Error> {
    try {
    const originUrl= "https://randomuser.me/api/"
    let fetchUrl = originUrl + `?page=${page}&results=${results}`
    if (seed !== ""){
        fetchUrl+=`&seed=${seed}`
    }
    const res = await fetch(fetchUrl)
    const json = await res.json();
    console.log(json)
    return json
    } catch(e) {
        console.error(e)
        return "Error"
    }
}