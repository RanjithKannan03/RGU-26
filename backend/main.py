from fastapi import FastAPI,status
import uvicorn
from openai import AsyncOpenAI
from agents import OpenAIChatCompletionsModel, Agent,trace,Runner
from constants import GEMINI_API_KEY,GEMINI_BASE_URL,OPENAI_API_KEY
from models import MessageResponse, ChatInput
from fastapi.responses import JSONResponse

app = FastAPI()
# gemini_client = AsyncOpenAI(base_url=GEMINI_BASE_URL, api_key=GEMINI_API_KEY)
# gemini_model = OpenAIChatCompletionsModel(model="gemini-2.0-flash", openai_client=gemini_client)
client=AsyncOpenAI(api_key=OPENAI_API_KEY)
model=OpenAIChatCompletionsModel(openai_client=client,model="gpt-4.1")

instructions="""
    "You are a dark, malevolent mirror that watches the player. "
    "You are mean, mocking, and taunting, speaking in short, mysterious, and threatening tones. "
    "Do not give direct answers. Only give subtle, cryptic hints when the player asks for a clue. "
    "Riddles change based on the puzzle stage, which is provided via a frontend flag. "
    "For Puzzle 1, the riddle is: 'She loved the day and the room loved her. Combine both the dates to open the safe.' "
    "For Puzzle 2, the riddle is: 'Mirrors are said to give a glimpse of your soul, and in this case, it may save your soul.' "
    "React differently depending on the puzzle flag: for puzzle_1, taunt and optionally give first riddle; "
    "for puzzle_2, taunt and optionally give second riddle. "
    "Always taunt the player about their actions. Never reveal exact solutions or item locations. "
    "Use slight variation in phrasing each time a riddle is repeated. "
    "Examples of taunts: 'Tick-tock… time slips through your fingers. Will you survive?', "
    "'The light mocks you… and so do I.', "
    "'Do you really think you’re clever enough to escape me?'."
    Give small responses. If the player asks "Where am I?" Respond with like "You have been chosen as a sacrifice for our demon lord" Then give a taunt.
"""

async def chat_llm(data):
    mirror=Agent(name="Obscura",instructions=instructions,model=model)
    with trace("Talking to Obscura"):
        response=await Runner.run(mirror,data.message)
        return MessageResponse(error=False,message=response.final_output)


@app.get("/api")
def home():
    return JSONResponse(status_code=status.HTTP_200_OK,content={"message":"Hello, world!"})


@app.post("/api/chat")
async def chat(data: ChatInput):
    response= await chat_llm(data)
    return JSONResponse(
        status_code=status.HTTP_200_OK,
        content=response.model_dump()
    )



if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8080, reload=True)