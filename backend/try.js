const fs = require("fs");
const FormData = require("form-data");
const OpenAI = require('openai-api');
const path = require('path');
const axios = require("axios");
const { Configuration, OpenAIApi } = require("openai");
const speech = require("@google-cloud/speech");
require("dotenv").config();

function getFilePath(recordName) {
    const downloadsPath = path.join(require('os').homedir(), 'Downloads');
    const filePath = downloadsPath + "/" + recordName + ".wav"
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.log(`${filePath} does not exist`)
        }else {
            console.log(`${filePath} exists`);
        }
    })
    return filePath;
}


function gptAgent(prompt) {

const options = {
  method: 'POST',
  url: 'https://simple-chatgpt-api.p.rapidapi.com/ask',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': `${process.env.GPT_KEY}`,
    'X-RapidAPI-Host': 'simple-chatgpt-api.p.rapidapi.com'
  },
  data: {"question":`${prompt}`}
};

axios.request(options).then(function (response) {
	return response.data;
}).catch(function (error) {
	console.error(error);
});
}

//gpt 2

function speechToText(recordName) {
    
    const filePath = getFilePath(recordName);
    //using speech extraction API
    const FormData = require("form-data");

    const data = new FormData();
    data.append("sound", fs.createReadStream(filePath));

    const options = {
    method: 'POST',
    url: 'https://speech-recognition-english1.p.rapidapi.com/api/asr',
    headers: {
        'X-RapidAPI-Key': `${process.env.SPEECH_TO_TEXT_KEY}`,
        'X-RapidAPI-Host': 'speech-recognition-english1.p.rapidapi.com',
        ...data.getHeaders()
    },
    data: data
    };

    axios.request(options).then(function (response) {
        console.log(gptAgent2(response.data.data["text"]));
        //return gptAgent2(response.data.data["text"]);
    }).catch(function (error) {
        console.error(error);
    });
};


//part 




module.exports.speechToText = speechToText;
//speechToText();


//console.log(new Date().toUTCString());
//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
//result = response.data.data["text"]



