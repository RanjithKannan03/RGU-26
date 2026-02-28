"use server";

backendURL = process.env.BACKEND_URL;

export async function chat(message, puzzleStage) {
  try {
    const response = await fetch(`${backendURL}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: message,
        puzzle_stage: puzzleStage,
      }),
    });
    const data = await response.json();
    return { status: "success", data: data };
  } catch (e) {
    console.log(e);
    return { status: "error" };
  }
}
