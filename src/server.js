const express = require("express");
const session = require("express-session");
const expressGraphQL = require("express-graphql");
const schema = require("./schema.js");
const PORT = process.env.PORT || 4000;
const app = express();

app.use(session({ secret: "keyboard cat", cookie: { maxAge: 60000 } }));

app.use(
  "/graphql",
  expressGraphQL({
    schema: schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log("Server is running on port 4000..");
});
