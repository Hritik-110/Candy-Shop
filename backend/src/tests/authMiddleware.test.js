const request = require("supertest");
const app = require("../app");
const jwt = require("jsonwebtoken");

describe("Auth Middleware", () => {

  it("should return 401 if no token is provided", async () => {
    const res = await request(app).get("/api/sweets");
    expect(res.statusCode).toBe(401);
  });

  it("should return 401 if invalid token is provided", async () => {
    const res = await request(app)
      .get("/api/sweets")
      .set("Authorization", "Bearer invalidtoken123");

    expect(res.statusCode).toBe(401);
  });

});
