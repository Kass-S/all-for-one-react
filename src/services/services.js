

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

export {SayHelloFetch, AddNumbersFetch, AskingQuestionsFetch}