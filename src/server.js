import { createServer, Model } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  return createServer({
    environment,

    models: {
      tweet: Model,
    },

    seeds(server) {
      server.create("tweet", {
        name: "Bob",
        user: "@bobinho",
        text: "fui na padaria",
        profileImage: "https://www.joanadarcam.com.br/wp-content/uploads/2020/02/images-92.jpeg",
        postImage: "https://www.joanadarcam.com.br/wp-content/uploads/2020/02/images-92.jpeg",
        favorite: true,
      });
      server.create("tweet", {
        name: "Bob",
        user: "@bobinho2",
        text: "fui na padaria",
        profileImage: "https://www.joanadarcam.com.br/wp-content/uploads/2020/02/images-92.jpeg",
        favorite: false,
      });
      server.create("tweet", {
        name: "Bob",
        user: "@bobinho2",
        text: "fui na padaria",
        profileImage: "https://www.joanadarcam.com.br/wp-content/uploads/2020/02/images-92.jpeg",
        favorite: false,
      });
      server.create("tweet", {
        name: "Bob",
        user: "@bobinho2",
        text: "fui na padaria",
        profileImage: "https://www.joanadarcam.com.br/wp-content/uploads/2020/02/images-92.jpeg",
        favorite: false,
      });
    },

    routes() {
      this.get("/api/tweets", (schema) => {
        return schema.tweets.all();
      });

      this.post("/api/tweets", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);

        return schema.tweets.create(attrs);
      });

      this.delete("/api/tweets/:id", (schema, request) => {
        let id = request.params.id;

        let tweet = schema.tweets.find(id);
        return tweet.destroy();
      });

      this.put("/api/tweets/:id", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        let id = request.params.id;

        return schema.db.tweets.update(id, attrs);
      });
    },
  });
}
