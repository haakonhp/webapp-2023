// TODO: Not implemented
import {Faker, CreateResponses, CreateResponseParams, Response} from "@/features/responses/types";
import {createResponses, getRandomId, getRandomItem} from "@/features/responses/createResponse";


const fakerMock: Faker = {
  id: getRandomId,
  answer: () => 'answer',
  score: () => 3,
  category: () => 'one',
}

describe.only("Create responses", () => {
  it("should create response", () => {
    const responses = createResponses({count: 10, faker: fakerMock})
    expect(responses.size).toBe(10)
  })
  it("should have correct data", () => {
    const responses = createResponses({count: 10, faker: fakerMock})
    const firstResponse = Array.from(responses.values())[0]
    expect(firstResponse.answer).toBe("answer")
    expect(firstResponse.score).toBe(3)
    expect(firstResponse.category).toBe("one")
  })
  it("should add to existing list", () => {
    const intialResponses = new Map<string, Response>()[
        ]
    expect(firstProduct.answer).toBe("answer")
    expect(firstProduct.category).toBe("Initial")
    expect(firstProduct.id).toBe("response-initial")
    expect(products.size).toBe(11)
  })
  it("should fail if no responses can be added", () => {})
  expect(() => {
    createResponses({count: 0, faker: fakerMock})
  }).toThrowError("No responses")
})
