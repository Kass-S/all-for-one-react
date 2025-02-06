

const SayHelloFetch = async (sayHelloName) => {
    const response = await fetch(`https://kspacekallforone-hfdea4h9dre7adfd.westus-01.azurewebsites.net/SayHello/SayHello/${sayHelloName}`);
    const data = response.text();
    return data;
}

const AddNumbersFetch = async (num1, num2) => {
    const response = await fetch(`https://kspacekallforone-hfdea4h9dre7adfd.westus-01.azurewebsites.net/Add2Num/Add/${num1}/${num2}`);
    const data = response.text();
    return data;
}

const AskingQuestionsFetch = async (nameInput, timeInput) => {
    const response = await fetch(`https://kspacekallforone-hfdea4h9dre7adfd.westus-01.azurewebsites.net/AskingQuestions/Asking/${nameInput}/${timeInput}`);
    const data = response.text();
    return data;
}

const OddEvenFetch = async (number) => {
    const response = await fetch(`https://kspacekallforone-hfdea4h9dre7adfd.westus-01.azurewebsites.net/OddEven/OddEvenAnswer/${number}`);
    const data = response.text();
    return data;
}

const MadLibFetch = async (madLibNoun, madLibAnimal, madLibName, madLibDifferentName, madLibEmotion, madLibAction, madLibJob, madLibStructure) => {
    const response = await fetch(`https://kspacekallforone-hfdea4h9dre7adfd.westus-01.azurewebsites.net/MadLib/MadLibStory/${madLibNoun}/${madLibAnimal}/${madLibName}/${madLibDifferentName}/${madLibEmotion}/${madLibAction}/${madLibJob}/${madLibStructure}`);
    const data = await response.text();
    return data;
}

const NumberReverseFetch = async (reverseItNum) => {
    const response = await fetch(`https://kspacekallforone-hfdea4h9dre7adfd.westus-01.azurewebsites.net/NumberReverse/NumberReverseIt/${reverseItNum}`);
    const data = await response.text();
    return data;
}

const AlphnumericReverseFetch = async (reverseItString) => {
    const promise = await fetch(`https://kspacekallforone-hfdea4h9dre7adfd.westus-01.azurewebsites.net/StringReverse/ReverseIt/${reverseItString}`);
    const data = await promise.text();
    return data;
}

export {SayHelloFetch, AddNumbersFetch, AskingQuestionsFetch, OddEvenFetch, MadLibFetch, NumberReverseFetch, AlphnumericReverseFetch }