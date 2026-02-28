import os
from dotenv import load_dotenv

load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/v1beta/openai/"
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

if __name__=="__main__":
    print(GEMINI_API_KEY)