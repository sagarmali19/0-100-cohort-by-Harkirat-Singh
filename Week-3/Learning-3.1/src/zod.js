const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());

// Example schema
// const schema1 = zod.object({
//     email: zod.string(),
//     password: z.string(),
//     ountry: z.literal("IN").or(z.literal("US")),
//     kidneys: z.array(z.number())
// })

app.use(express.json())

app.post("/health-checkup", function(req, res){
    // kidneys = [1,2]
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if(!response.success){
        res.status(411).json({
            msg: "Input is invalid"
        })
    }
    else{
        res.send({
            response
        })
    }
    // {
    //     "response": {
    //         "success": false,
    //         "error": {
    //             "issues": [
    //                 {
    //                     "code": "invalid_type",
    //                     "expected": "array",
    //                     "received": "undefined",
    //                     "path": [],
    //                     "message": "Required"
    //                 }
    //             ],
    //             "name": "ZodError"
    //         }
    //     }    
    // }


    // {
    //     "msg": "Input is invalid"
    // }
    
})

// {
//     "response": {
//         "success": true,
//         "data": [
//             1,
//             2
//         ]
//     }
// }



app.listen(3000);