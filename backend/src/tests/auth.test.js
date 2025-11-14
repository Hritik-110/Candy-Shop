require("dotenv").config();
const request = require("supertest");
const app = require("../app");
const User = require("../models/User");

jest.setTimeout(20000);

describe("Auth API", () => {
  
  // हर test से पहले users साफ कर देते हैं
  beforeEach(async () => {
    await User.deleteMany({});
  });

  it("should register a new user", async () => {
    const dynamicEmail = `test_${Date.now()}@example.com`;

    const res = await request(app)
      .post("/api/auth/register")
      .send({
        name: "Test User",
        email: dynamicEmail,
        password: "password123",
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("token");
  });

  it("should login an existing user", async () => {
    const dynamicEmail = `test_${Date.now()}@example.com`;

    // पहले register करें
    await request(app)
      .post("/api/auth/register")
      .send({
        name: "Test User",
        email: dynamicEmail,
        password: "password123",
      });

    // फिर login करें
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: dynamicEmail,
        password: "password123",
      });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
  });
});
