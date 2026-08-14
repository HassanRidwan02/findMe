import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: 'import.meta.env.VITE_GROQ_API_KEY',
  dangerouslyAllowBrowser: true,
});

export async function findPotentialMatches(foundItem, lostItems) {

  console.log("AI SERVICE STARTED");
  console.log("FOUND ITEM:", foundItem);
  console.log("LOST ITEMS:", lostItems);

  console.log("SENDING REQUEST TO GROQ");

  const response = await groq.chat.completions.create({
    model: "openai/gpt-oss-20b",

    messages: [
      {
        role: "system",
        content: `
            You are an AI assistant for a university Lost and Found system.

            Your job is to identify whether a FOUND item could potentially
            match one or more LOST items.

            Do not claim that an item definitely belongs to someone.
            Only identify potential matches.
                    `,
      },

      {
        role: "user",
        content: `
        FOUND ITEM:
        ${JSON.stringify(foundItem, null, 2)}

        LOST ITEMS:
        ${JSON.stringify(lostItems, null, 2)}

        Compare the found item against the lost items.

        Consider:
        - item name
        - category
        - description
        - location
        - date
        - distinctive characteristics

        Return only potential matches.
                `,
              },
            ],

            response_format: {
              type: "json_schema",
              json_schema: {
                name: "lost_found_matches",
                strict: true,

                schema: {
                  type: "object",

                  properties: {
                    matches: {
                      type: "array",

                      items: {
                        type: "object",

                        properties: {
                          itemId: {
                            type: "integer",
                          },

                          confidence: {
                            type: "number",
                          },

                          reason: {
                            type: "string",
                          },
                        },

                        required: [
                          "itemId",
                          "confidence",
                          "reason",
                        ],

                        additionalProperties: false,
                      },
                    },
                  },

                  required: ["matches"],
                  additionalProperties: false,
                },
              },
            },
          });

          return JSON.parse(
            response.choices[0].message.content
          );
        }

// console.log("RAW GROQ RESPONSE:", response);