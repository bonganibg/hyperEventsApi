const { describe, beforeEach, test, expect } = require("@jest/globals")
const {  createEvent, updateEvent } = require("../../src/services/event.service");
const EventModel = require("../../src/models/event.model");
// const DateModel = require("../../src/models/date.model")

const createSpy = jest.spyOn(EventModel, "create");

describe("Create event", () => {
    beforeEach(() => {
        createSpy.mockReturnValue({
            location: "Location",
            _id: "XXXXXXXXX"
        })
    });

    test("Should return false success if there is no tour id in the body", async () => {
        const result = await createEvent({location: "something "});

        expect(result.success).toBe(false);
    });

    test("Output should contain object ID", async () => {
        const result = await createEvent({location: "something ", tourId: "XXXXXXXXX"});        
        expect(result).toHaveProperty("id");    
    })
})

describe("Update Event", () => {
    test("Should return false success if there is no tour id in the body", async () => {
        const result = await updateEvent({location: "something "});

        expect(result.success).toBe(false);
    });

    test("Should throw an error if location is missing", async () => {
        const result = await updateEvent({tourId: "XXXXXXXXX"});
        expect(result.success).toBe(false);
    })
})