from pydantic import BaseModel,Field
from typing import Optional

class MessageResponse(BaseModel):
    error: bool
    message: Optional[str] = Field(default=None)

class ChatInput(BaseModel):
    message: str
    puzzle_stage:str