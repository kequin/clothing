

export default class ClothesAPI {
    //ключа нет, мне чиста пахую я шампунь хедерс шолдерс 3 в 1
    /* Api.mainCall()
    .then((info) => setObjects(info.result))
    .then(() => setLoading(false))
    .catch(() => setError(true)) 
    const Api = new API();
    const [loading, setLoading] = useState(true);
    const [objects, setObjects] = useState();
    const [error, setError] = useState(false);*/
    mainCall = async() => {
        const res = await fetch("https://thingproxy.freeboard.io/fetch/https://api.printful.com/products");
        if(!res.ok) throw new Error(`opppsss... clothing api now not available`)
        return await res.json();
    }
    sortByClass = () => {
            
        return "xd";
    }
}