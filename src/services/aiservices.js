import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function findPotentialMatches(foundItem, lostItems) {
  const prompt = `
You are helping a university lost and found system identify potential matches.

Found item:
${JSON.stringify(foundItem, null, 2)}

Lost items:
${JSON.stringify(lostItems, null, 2)}

Compare the found item against the lost items.

Consider:
- item name
- category
- location
- date
- description
- identifying characteristics

Only return items that are reasonably likely to be the same physical item.

Return JSON in this exact format:

{
  "matches": [
    {
      "itemId": "id of lost item",
      "confidence": 0.0,
      "reason": "short explanation"
    }
  ]
}

If there are no reasonable matches, return:

{
  "matches": []
}
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "You are a careful lost-and-found matching assistant. Never claim certainty about ownership.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    response_format: {
      type: "json_object",
    },
  });

  return JSON.parse(response.choices[0].message.content);
}