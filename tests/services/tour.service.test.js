const { describe, beforeEach, test, expect } = require("@jest/globals")
const {  createTour } = require("../../src/services/tour.service");
const TourModel = require("../../src/models/tour.model")

const createSpy = jest.spyOn(TourModel, 'create');


describe("Test Create Tour", () => {
    beforeEach(() => {
        createSpy.mockReturnValue({
            _id: 1
        })
    })

    test("createTour should return the newly created tours ID", async () => {
        const result = await createTour({});

        expect(result.id).toBeTruthy()
    })
})