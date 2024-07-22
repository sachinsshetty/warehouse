Prompt 1


`
Identify food items and its features from the given image. 
The result should be in a JSON string format. For example,
{"food_items": [{"name": "banana", "color": "yellow", "taste": "sweet", "rotten": true, "quantity": 1,  "type": "fruit"},
{"name": "potato", "color": "yellow", "taste": "sweet", "rotten": false, "quantity": 3, "type": "vegetable"}]}
`


Prompt 2 
"For each food item in the JSON DATA, provide a detailed description focusing on reducing food wastage. Include the following sections:\n" +
"1. State the name of the food item.\n" +
"2. Mention the expiration date to raise awareness about freshness.\n" +
"3. Describe the best storage practices to prolong shelf life.\n" +
"4. List creative ways to use the food item to encourage consumption before it spoils.\n" +
"5. Provide actionable tips for minimizing waste, such as recipes or preservation methods.\n" +
"JSON DATA = "+ jsonStr;


Current State
Use Prompt 1 along with image for llava/moondream to get jsonStr

Re process the output with another LLM request

Use Prompt 2 including llm1 ouput  with mistral7b/8x7b ?

