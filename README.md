# chatgpt-voice-commando

Tool already built. API costs preventing usage and deployment. 

I envision that this tool will be built on two APIs-- the chatGPT API and any speech-to-text API. 
A similar tool has probably been built given the popularity of chatGPTs API with developers but this is just so I can practice. 

How I'm going to build this tool:

1. Create a frontend that allows a user to record their voice. 
2. In the backend, the recorded voice file will be converted and stored as a URL and sent to the speech-to-text API to convert the speech to text obviously. 
3. ^^ There will be on a get route that retrieves the stored processed text and passes it on to the chatGPT API where the agent will process thr request.
