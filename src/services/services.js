

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
    const response = await fetch(`https://kspacekallforone-hfdea4h9dre7adfd.westus-01.azurewebsites.net/StringReverse/ReverseIt/${reverseItString}`);
    const data = await response.text();
    return data;
}

const GreaterLessFetch = async (greaterLessNum1, greaterLessNum2) => {
    const response = await fetch(`https://kspacekallforone-hfdea4h9dre7adfd.westus-01.azurewebsites.net/GreaterLess/GreaterLessThan/${greaterLessNum1}/${greaterLessNum2}`)
    const data = await response.text();
    return data;
}

const Magic8BallFetch = async (magic8Input) => {
    const response = await fetch(`https://kspacekallforone-hfdea4h9dre7adfd.westus-01.azurewebsites.net/Magic8Ball/Magic8/${magic8Input}`);
    const data = await response.text();
    return data;
}

const RestaurantPickerFetch = async (restaurantChoice) => {
    const response = await fetch(`https://kspacekallforone-hfdea4h9dre7adfd.westus-01.azurewebsites.net/RestaurantPicker/Pick/${restaurantChoice}`);
    const data = await response.text();
    return data;
}

export {SayHelloFetch, AddNumbersFetch, AskingQuestionsFetch, OddEvenFetch, MadLibFetch, NumberReverseFetch, AlphnumericReverseFetch, GreaterLessFetch, Magic8BallFetch, RestaurantPickerFetch }