

const SayHelloFetch = async () => {
    const response = await fetch("");
    const data = response.text();
    return data;
}