const { describe, expect, beforeEach, test } = require("@jest/globals")
const DateModel = require("../../src/models/date.model");
const { createDate, updateDate } = require("../../src/services/date.service")

const createSpy = jest.spyOn(DateModel, 'create');

describe("Create Date", () => {
    beforeEach(() => {
        createSpy.mockReturnValue({
            _id: "XXXXXX"            
        })
    })

    test("Should return a fail success message if there is no eventId", async () => {
        const result = await createDate({
            tourId: "XXXXX",
            date: "06-06-2025",
            venue: "XXXXXX"
        });

        expect(result.success).toBe(false);
    });

    test("Should return false success if there is no tourID", async () => {
        const result = await createDate({ 
            eventId: "XXXXX",
            date: "06-06-2025",
            venue: "XXXXXX"
        });

        expect(result.success).toBe(false);
    });

    test("Should return id with response", async () => {
        const result = await createDate({
            eventId: "XXXXXX",
            tourId: "XXXXXXXX",
            date: "06-06-2025",
            venue: "XXXXXX"
        });

        expect(result.id).toBe("XXXXXX");
    });
})

describe("Update Date", () => {
    test("Should return a false success if there is no id", async () => {
        const result = await updateDate({
            venue: "XXXXXXX"
        })

        expect(result.success).toBe(false)
    })
})